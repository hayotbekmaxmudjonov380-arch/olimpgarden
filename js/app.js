// OLIMP GARDEN RESTAURANT - Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentLang: localStorage.getItem('olimp_lang') || 'uz',
    currentCategory: 'all',
    searchQuery: '',
    cart: JSON.parse(localStorage.getItem('olimp_cart') || '[]'),
    mobileNavOpen: false
  };

  // DOM Elements
  const header = document.querySelector('.site-header');
  const langBtn = document.getElementById('langBtn');
  const langText = document.getElementById('langText');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const menuGrid = document.getElementById('menuGrid');
  const categoryPillsContainer = document.getElementById('categoryPills');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');
  const cartOrderBtn = document.getElementById('cartOrderBtn');
  const reservationForm = document.getElementById('reservationForm');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const reservationRefCode = document.getElementById('reservationRefCode');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastContainer = document.getElementById('toastContainer');
  const testimonialsGrid = document.getElementById('testimonialsGrid');

  // Format Currency
  function formatMoney(amount) {
    return new Intl.NumberFormat('uz-UZ').format(amount) + ' ' + (TRANSLATIONS[state.currentLang]?.currency || 'so\'m');
  }

  // Toast Notification
  function showToast(message, icon = '🌿') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Update All Translations
  function applyLanguage(lang) {
    state.currentLang = lang;
    localStorage.setItem('olimp_lang', lang);

    // Update Language Button Label
    if (langText) {
      langText.textContent = lang.toUpperCase();
    }

    // Update active dropdown item
    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Update data-i18n-placeholder elements
    const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Render components that depend on language
    renderCategoryPills();
    renderMenuItems();
    renderTestimonials();
    updateCartUI();
  }

  // Language Dropdown Event
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.dataset.lang);
        langDropdown.classList.remove('open');
      });
    });
  }

  // Sticky Header Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  // Mobile Navigation
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      state.mobileNavOpen = !state.mobileNavOpen;
      navMenu.classList.toggle('open', state.mobileNavOpen);
      mobileNavToggle.innerHTML = state.mobileNavOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        state.mobileNavOpen = false;
        navMenu.classList.remove('open');
        if (mobileNavToggle) {
          mobileNavToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
        }
      });
    });
  }

  // Render Category Filter Pills
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = '';

    MENU_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-pill ${state.currentCategory === cat.id ? 'active' : ''}`;
      btn.textContent = cat[`name_${state.currentLang}`] || cat.name_uz;
      btn.addEventListener('click', () => {
        state.currentCategory = cat.id;
        document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenuItems();
      });
      categoryPillsContainer.appendChild(btn);
    });
  }

  // Render Menu Items
  function renderMenuItems() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const query = state.searchQuery.toLowerCase().trim();

    const filtered = MENU_ITEMS.filter(item => {
      const matchesCat = state.currentCategory === 'all' 
        ? true 
        : (state.currentCategory === 'yangi' ? item.isNew : item.categoryId === state.currentCategory);

      const name = (item.name[state.currentLang] || item.name.uz).toLowerCase();
      const desc = (item.desc[state.currentLang] || item.desc.uz).toLowerCase();
      const matchesSearch = query === '' || name.includes(query) || desc.includes(query);

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">🍽️ ${TRANSLATIONS[state.currentLang]?.menu_search_placeholder || 'Hech narsa topilmadi'}</p>
          <p style="font-size: 0.9rem;">Boshqa toifani tanlab ko'ring.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'dish-card';

      const itemName = item.name[state.currentLang] || item.name.uz;
      const itemDesc = item.desc[state.currentLang] || item.desc.uz;
      const addText = TRANSLATIONS[state.currentLang]?.menu_add_to_cart || "Savatga qo'shish";

      card.innerHTML = `
        <div class="dish-media">
          <img src="${item.image}" alt="${itemName}" loading="lazy">
          <div class="dish-badges">
            ${item.isPopular ? `<span class="badge-dish popular">★ ${TRANSLATIONS[state.currentLang]?.badge_popular || 'Xit'}</span>` : ''}
            ${item.isNew ? `<span class="badge-dish new">${TRANSLATIONS[state.currentLang]?.badge_new || 'Yangi'}</span>` : ''}
          </div>
        </div>
        <div class="dish-body">
          <h3 class="dish-name">${itemName}</h3>
          <p class="dish-desc">${itemDesc}</p>
          <div class="dish-footer">
            <span class="dish-price">${formatMoney(item.price)}</span>
            <button class="btn-add-cart" data-id="${item.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>${addText}</span>
            </button>
          </div>
        </div>
      `;

      const addBtn = card.querySelector('.btn-add-cart');
      addBtn.addEventListener('click', () => {
        addToCart(item);
      });

      menuGrid.appendChild(card);
    });
  }

  // Menu Search Handler
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // Render Testimonials
  function renderTestimonials() {
    if (!testimonialsGrid) return;
    testimonialsGrid.innerHTML = '';

    TESTIMONIALS.forEach(t => {
      const card = document.createElement('div');
      card.className = 'review-card';

      const comment = t[`comment_${state.currentLang}`] || t.comment_uz;
      const role = t[`role_${state.currentLang}`] || t.role_uz;

      card.innerHTML = `
        <div class="review-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${t.name.charAt(0)}</div>
            <div>
              <div class="reviewer-name">${t.name}</div>
              <div class="reviewer-role">${role}</div>
            </div>
          </div>
          <div class="review-google-badge">
            ${'★'.repeat(t.rating)}
          </div>
        </div>
        <p class="review-text">“${comment}”</p>
      `;

      testimonialsGrid.appendChild(card);
    });
  }

  // Cart Management
  function addToCart(item) {
    const existing = state.cart.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id: item.id,
        price: item.price,
        image: item.image,
        name: item.name,
        quantity: 1
      });
    }

    saveCart();
    updateCartUI();
    const itemName = item.name[state.currentLang] || item.name.uz;
    showToast(`${itemName} savatga qo'shildi!`, '🛒');
  }

  function saveCart() {
    localStorage.setItem('olimp_cart', JSON.stringify(state.cart));
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartBadge) {
      cartBadge.textContent = totalCount;
      cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (cartSubtotalVal) {
      cartSubtotalVal.textContent = formatMoney(totalPrice);
    }

    if (cartItemsList) {
      cartItemsList.innerHTML = '';

      if (state.cart.length === 0) {
        cartItemsList.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <p style="font-size: 2.5rem; margin-bottom: 10px;">🧺</p>
            <p style="font-weight: 600; color: #FFFFFF; margin-bottom: 6px;">${TRANSLATIONS[state.currentLang]?.cart_empty || "Savatchangiz bo'sh"}</p>
            <p style="font-size: 0.85rem;">${TRANSLATIONS[state.currentLang]?.cart_empty_sub || "Menyudan taom tanlang"}</p>
          </div>
        `;
        if (cartOrderBtn) {
          cartOrderBtn.disabled = true;
          cartOrderBtn.style.opacity = '0.5';
          cartOrderBtn.style.pointerEvents = 'none';
        }
      } else {
        if (cartOrderBtn) {
          cartOrderBtn.disabled = false;
          cartOrderBtn.style.opacity = '1';
          cartOrderBtn.style.pointerEvents = 'auto';
        }

        state.cart.forEach(item => {
          const row = document.createElement('div');
          row.className = 'cart-item-row';
          const name = item.name[state.currentLang] || item.name.uz;

          row.innerHTML = `
            <img src="${item.image}" alt="${name}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-name">${name}</div>
              <div class="cart-item-price">${formatMoney(item.price)}</div>
            </div>
            <div class="cart-qty-ctrls">
              <button class="cart-qty-btn minus" data-id="${item.id}">-</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn plus" data-id="${item.id}">+</button>
            </div>
          `;

          row.querySelector('.minus').addEventListener('click', () => {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.cart = state.cart.filter(i => i.id !== item.id);
            }
            saveCart();
            updateCartUI();
          });

          row.querySelector('.plus').addEventListener('click', () => {
            item.quantity += 1;
            saveCart();
            updateCartUI();
          });

          cartItemsList.appendChild(row);
        });
      }
    }
  }

  // Open/Close Cart Drawer
  if (cartTriggerBtn && cartDrawer && cartDrawerOverlay) {
    cartTriggerBtn.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      cartDrawerOverlay.classList.add('active');
    });

    const closeCart = () => {
      cartDrawer.classList.remove('active');
      cartDrawerOverlay.classList.remove('active');
    };

    cartCloseBtn?.addEventListener('click', closeCart);
    cartDrawerOverlay.addEventListener('click', closeCart);
  }

  // Cart Telegram Order Handler
  if (cartOrderBtn) {
    cartOrderBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;

      const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      let orderText = `🌿 *OLIMP GARDEN RESTAURANT - BUYURTMA*\n\n`;

      state.cart.forEach((item, idx) => {
        const name = item.name[state.currentLang] || item.name.uz;
        orderText += `${idx + 1}. *${name}* x ${item.quantity} = ${formatMoney(item.price * item.quantity)}\n`;
      });

      orderText += `\n💰 *Jami summa:* ${formatMoney(totalPrice)}\n`;
      orderText += `📍 *Yetkazish / Olib ketish:* Urganch, Olimp Garden`;

      const telegramUrl = `https://t.me/olimpkafe?text=${encodeURIComponent(orderText)}`;
      window.open(telegramUrl, '_blank');
      showToast("Buyurtma Telegram orqali yuborilmoqda...", "🚀");
    });
  }

  // Table Reservation Form Submission
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const zone = document.getElementById('resZone').value;
      const notes = document.getElementById('resNotes').value.trim();

      if (!name || !phone || !date || !time) {
        showToast("Iltimos, barcha majburiy maydonlarni to'ldiring!", "⚠️");
        return;
      }

      // Generate booking reference code
      const refCode = 'OG-' + Math.floor(1000 + Math.random() * 9000);
      if (reservationRefCode) {
        reservationRefCode.textContent = refCode;
      }

      // Show Success Modal
      if (successModal) {
        successModal.classList.add('active');
      }

      // Prepare Telegram confirmation link if clicked
      const telegramBtn = document.getElementById('modalTelegramBtn');
      if (telegramBtn) {
        const message = `🌿 *OLIMP GARDEN STOL BRONI*\n\n` +
          `📌 *Kod:* ${refCode}\n` +
          `👤 *Mehmon:* ${name}\n` +
          `📞 *Tel:* ${phone}\n` +
          `👥 *Mehmonlar soni:* ${guests}\n` +
          `📅 *Sana:* ${date}\n` +
          `⏰ *Vaqt:* ${time}\n` +
          `🏛️ *Joy:* ${zone}\n` +
          (notes ? `📝 *Izoh:* ${notes}` : '');

        telegramBtn.onclick = () => {
          window.open(`https://t.me/olimpkafe?text=${encodeURIComponent(message)}`, '_blank');
        };
      }

      // Reset form
      reservationForm.reset();
      showToast("Stol muvaffaqiyatli band qilindi!", "✅");
    });
  }

  // Close Modals
  const closeModal = () => {
    successModal?.classList.remove('active');
  };
  modalCloseBtn?.addEventListener('click', closeModal);
  modalDoneBtn?.addEventListener('click', closeModal);
  successModal?.addEventListener('click', (e) => {
    if (e.target === successModal) closeModal();
  });

  // Back to Top Button
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Set default min date for reservation picker to today
  const resDateInput = document.getElementById('resDate');
  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
    resDateInput.value = today;
  }

  // Initialize Language
  applyLanguage(state.currentLang);

  // ==========================================================================
  // STORY SCROLL (FLOW ART) GSAP SCROLLTRIGGER ENGINE
  // ==========================================================================
  function initStoryScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const sections = Array.from(document.querySelectorAll('[data-flow-section]'));
    if (sections.length === 0) return;

    const triggers = [];

    // Apply pinned rotation story scroll
    ScrollTrigger.matchMedia({
      // All screens above 768px (Desktop & Tablet) get the full luxury rotation stack
      "(min-width: 768px)": function() {
        sections.forEach((section, i) => {
          gsap.set(section, { zIndex: i + 1 });

          const inner = section.querySelector('.flow-art-container');
          if (!inner) return;

          if (i > 0) {
            gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });
            const tween = gsap.to(inner, {
              rotation: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 25%',
                scrub: true,
              },
            });
            if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
          }

          if (i < sections.length - 1) {
            triggers.push(
              ScrollTrigger.create({
                trigger: section,
                start: 'bottom bottom',
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
              })
            );
          }
        });
      },

      // Mobile devices (under 768px): subtle tilt & clean reveal for great performance
      "(max-width: 767px)": function() {
        sections.forEach((section, i) => {
          gsap.set(section, { zIndex: i + 1 });

          const inner = section.querySelector('.flow-art-container');
          if (!inner) return;

          if (i > 0) {
            gsap.set(inner, { rotation: 12, transformOrigin: 'bottom left' });
            const tween = gsap.to(inner, {
              rotation: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 20%',
                scrub: true,
              },
            });
            if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
          }
        });
      }
    });

    ScrollTrigger.refresh();
  }

  // Initialize Story Scroll
  initStoryScroll();
});

