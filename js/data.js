// OLIMP GARDEN RESTAURANT - Menu Data
const MENU_CATEGORIES = [
  { id: 'all', name_uz: 'Barchasi', name_ru: 'Все', name_en: 'All' },
  { id: 'yangi', name_uz: 'Yangi Taomlar', name_ru: 'Новинки', name_en: 'New Dishes' },
  { id: 'baliq', name_uz: 'Baliq Taomlari', name_ru: 'Рыбные блюда', name_en: 'Fish Dishes' },
  { id: 'steyk', name_uz: 'Steyk', name_ru: 'Стейки', name_en: 'Steaks' },
  { id: 'shashliklar', name_uz: 'Shashliklar', name_ru: 'Шашлыки', name_en: 'Kebabs' },
  { id: 'ikkinchi', name_uz: '2-Taomlar', name_ru: 'Вторые блюда', name_en: 'Main Courses' },
  { id: 'birinchi', name_uz: '1-Taomlar', name_ru: 'Первые блюда', name_en: 'Soups' },
  { id: 'baraklar', name_uz: 'Baraklar', name_ru: 'Бараки', name_en: 'Baraks' },
  { id: 'somsalar', name_uz: 'Somsalar', name_ru: 'Самса', name_en: 'Samsas' },
  { id: 'salatlar', name_uz: 'Salatlar', name_ru: 'Салаты', name_en: 'Salads' },
  { id: 'disertlar', name_uz: 'Disertlar', name_ru: 'Десерты', name_en: 'Desserts' },
  { id: 'ichimliklar', name_uz: 'Salqin Ichimliklar', name_ru: 'Прохладительные напитки', name_en: 'Cold Drinks' },
  { id: 'choy', name_uz: 'Choy Assortimenti', name_ru: 'Чайное ассорти', name_en: 'Tea Selection' }
];

const MENU_ITEMS = [
  // Baliq Taomlari
  {
    id: 1,
    categoryId: 'baliq',
    isNew: true,
    isPopular: true,
    price: 135000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Xorazmcha Qovurilgan Sudak',
      ru: 'Жареный Судак по-хорезмски',
      en: 'Khorezm Fried Zander'
    },
    desc: {
      uz: 'Amudaryo yangi sudak balig‘i, maxsus ziravorlar va sarimsoqli limonli sous bilan xarsillab qovurilgan.',
      ru: 'Свежий судак из Амударьи, обжаренный со специями и подается с чесночно-лимонным соусом.',
      en: 'Fresh Amu Darya zander fish fried crisp with signature spices, lemon, and garlic sauce.'
    }
  },
  {
    id: 2,
    categoryId: 'baliq',
    isNew: false,
    isPopular: true,
    price: 160000,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Grilda Pishirilgan Syomga',
      ru: 'Сёмга на гриле с травами',
      en: 'Grilled Herb Salmon'
    },
    desc: {
      uz: 'Tender losos filesi, yangi rozmarin, limon sharbati va yashil sabzavotlar bilan grilda pishirilgan.',
      ru: 'Нежное филе лосося с розмарином, лимонным соком и овощами-гриль.',
      en: 'Tender salmon fillet grilled with fresh rosemary, lemon zest, and garden vegetables.'
    }
  },
  {
    id: 3,
    categoryId: 'baliq',
    isNew: true,
    isPopular: false,
    price: 120000,
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Olimp Garden Maxsus Sazan',
      ru: 'Фирменный Сазан Olimp Garden',
      en: 'Olimp Garden Signature Carp'
    },
    desc: {
      uz: 'Tandirda pishirilgan Amudaryo zog‘ora balig‘i, maxsus marinad va sabzavotli garnir bilan.',
      ru: 'Запеченный в тандыре сазан с фирменным маринадом и овощным гарниром.',
      en: 'Tandoor-baked fresh wild carp infused with herb marinade and roasted garden garnishes.'
    }
  },

  // Steyk
  {
    id: 4,
    categoryId: 'steyk',
    isNew: false,
    isPopular: true,
    price: 175000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Ribay Steyk (Premium Go‘sht)',
      ru: 'Стейк Рибай Премиум',
      en: 'Premium Ribeye Steak'
    },
    desc: {
      uz: 'Marmar mol go‘shti, rozmarinli sariyog‘ va qalampirli maxsus sous bilan olovda pishirilgan.',
      ru: 'Мраморная говядина, сливочное масло с розмарином и соус из зеленого перца.',
      en: 'Prime marbled beef steak seared to perfection with herb butter and black peppercorn reduction.'
    }
  },
  {
    id: 5,
    categoryId: 'steyk',
    isNew: true,
    isPopular: true,
    price: 195000,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'File Minyon Olimp',
      ru: 'Филе Миньон Олимп',
      en: 'Olimp Filet Mignon'
    },
    desc: {
      uz: 'Eng mayin mol lahmi, qo‘ziqorinli qaymoqli sous va gril pomidorlar bilan.',
      ru: 'Нежнейшая говяжья вырезка с грибным сливочным соусом и помидорами-гриль.',
      en: 'Tenderloin medallion paired with creamy wild mushroom velouté and char-grilled cherry tomatoes.'
    }
  },
  {
    id: 6,
    categoryId: 'steyk',
    isNew: false,
    isPopular: false,
    price: 145000,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'T-Boun Steyk',
      ru: 'Ти-Бон Стейк на углях',
      en: 'Charcoal T-Bone Steak'
    },
    desc: {
      uz: 'Ko‘mirda qovurilgan ikki xil go‘sht lazzati, maxsus garnir va barbekyu sousi bilan.',
      ru: 'Стейк на кости с дымком, домашний гарнир и соус BBQ.',
      en: 'Charcoal-grilled T-bone providing the best of tenderloin and strip, served with barbecue sauce.'
    }
  },

  // Shashliklar
  {
    id: 23,
    categoryId: 'shashliklar',
    isNew: false,
    isPopular: true,
    price: 24000,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Qo‘y Go‘shtli Sharbatli Shashlik',
      ru: 'Сочный Шашлык из Баранины',
      en: 'Juicy Lamb Kebab'
    },
    desc: {
      uz: 'Sara qo‘y go‘shti, dumg‘aza yog‘i, ziravorlar va sirkalangan piyoz bilan ko‘mirda pishirilgan.',
      ru: 'Отборная баранина на углях с маринованным луком и специями.',
      en: 'Tender lamb cuts grilled over charcoals with sumac onions.'
    }
  },
  {
    id: 24,
    categoryId: 'shashliklar',
    isNew: true,
    isPopular: true,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Qiyma Lyulya Shashlik',
      ru: 'Люля-Кебаб из Говядины',
      en: 'Minced Lyulya Kebab'
    },
    desc: {
      uz: 'Maydalangan sifatli mol go‘shti va zira bilan tayyorlangan mayin lyulya kabob.',
      ru: 'Сочный рубленый люля-кебаб из говядины с ароматными специями.',
      en: 'Succulent minced beef kebab infused with fresh herbs and zira.'
    }
  },

  // Yangi Taomlar
  {
    id: 7,
    categoryId: 'yangi',
    isNew: true,
    isPopular: true,
    price: 98000,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Xorazmcha Shivit Oshi (Yangi resept)',
      ru: 'Шивит Оши по-хорезмски (Новинка)',
      en: 'Khorezm Shivit Oshi (Special Dill Noodles)'
    },
    desc: {
      uz: 'Yashil shivitli ugra, mayin mol go‘shti qaylasi, qatiq va pomidor sousi bilan.',
      ru: 'Знаменитая хорезмская зеленая лапша с укропом, мясным соусом и катыком.',
      en: 'Authentic emerald dill noodles served with savory tender meat stew and chilled yogurt.'
    }
  },
  {
    id: 8,
    categoryId: 'yangi',
    isNew: true,
    isPopular: false,
    price: 110000,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Tandir Qovurma Go‘shti',
      ru: 'Мясо Тандыр Кавурма',
      en: 'Tandoor Roasted Beef Roast'
    },
    desc: {
      uz: 'Tandirda 4 soat dimlangan qo‘zi go‘shti, piyozli sirka va maxsus tandir noni bilan.',
      ru: 'Баранина, томленная в тандыре 4 часа, подается с луком в уксусе и свежей лепешкой.',
      en: 'Slow-roasted tender lamb baked 4 hours in clay tandoor with spiced onions.'
    }
  },

  // Baraklar (Baraks)
  {
    id: 25,
    categoryId: 'baraklar',
    isNew: true,
    isPopular: true,
    price: 55000,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Xorazmcha Yumurtqa Barak (Tuxumli)',
      ru: 'Хорезмский Юмуртка Барак',
      en: 'Khorezm Egg Yumurtqa Barak'
    },
    desc: {
      uz: 'Qadimiy Xorazm retsepti bo‘yicha tuxum va sariyog‘ bilan tayyorlangan milliy barak.',
      ru: 'Традиционные хорезмские вареники с яичной начинкой и сливочным маслом.',
      en: 'Traditional Khorezm egg-filled barak dumplings tossed in hot butter.'
    }
  },
  {
    id: 26,
    categoryId: 'baraklar',
    isNew: false,
    isPopular: true,
    price: 58000,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Go‘shtli Xorazmcha Barak',
      ru: 'Мясной Хорезмский Барак',
      en: 'Khorezm Beef Barak'
    },
    desc: {
      uz: 'Maydalangan mol go‘shti va sariyog‘li qayla bilan pishirilgan xushbo‘y barak.',
      ru: 'Хорезмские вареники с сочной мясной начинкой и сметаной.',
      en: 'Handcrafted beef dumplings served with creamy sour cream and melted butter.'
    }
  },

  // 2-Taomlar (Main Courses)
  {
    id: 9,
    categoryId: 'ikkinchi',
    isNew: false,
    isPopular: true,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Xorazmcha To‘y Oshi (Palov)',
      ru: 'Хорезмский Праздничный Плов',
      en: 'Khorezm Festive Plov'
    },
    desc: {
      uz: 'Lazer guruch, mayin go‘sht, sariq sabzi, mayiz va no‘xat bilan an’anaviy tarzda damlangan.',
      ru: 'Рис лазер, сочная говядина, желтая морковь, изюм и нут.',
      en: 'Traditional celebratory pilaf with premium rice, tender meat, yellow carrots and raisins.'
    }
  },
  {
    id: 10,
    categoryId: 'ikkinchi',
    isNew: false,
    isPopular: true,
    price: 88000,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Iqromcha Maxsus Shashlik Assorti',
      ru: 'Ассорти Шашлыков Olimp',
      en: 'Olimp Mixed Kebab Platter'
    },
    desc: {
      uz: 'Qo‘y go‘shti, jigar, qiyma va tovuq kaboblari, marinadlangan qizil piyoz bilan.',
      ru: 'Баранина, люля, печень и куриный шашлык на углях с маринованным луком.',
      en: 'Tender skewers of lamb, lyulya kebab, liver and chicken, served with sumac spiced onions.'
    }
  },
  {
    id: 11,
    categoryId: 'ikkinchi',
    isNew: false,
    isPopular: false,
    price: 72000,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Jiz-Biz Tovada',
      ru: 'Джиз-Биз на чугунной сковороде',
      en: 'Sizzling Jiz-Biz Skillet'
    },
    desc: {
      uz: 'Qisirlab qovurilgan mayin go‘sht va oltinrang kartoshka, sarimsoq va ko‘katlar bilan.',
      ru: 'Поджаристое мясо с золотистым картофелем, чесноком и свежей зеленью.',
      en: 'Crispy pan-fried beef and tender golden potatoes with garlic and fresh garden herbs.'
    }
  },

  // 1-Taomlar (Soups)
  {
    id: 12,
    categoryId: 'birinchi',
    isNew: false,
    isPopular: true,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Xorazmcha Qaynatma Sho‘rva',
      ru: 'Хорезмская Шурпа с бараниной',
      en: 'Khorezm Lamb Shurpa'
    },
    desc: {
      uz: 'Moylangan qo‘y go‘shti suyakli bulyoni, yirik sabzavotlar va xushbo‘y tog‘ rayhoni.',
      ru: 'Наваристый прозрачный бульон с нежным мясом баранины и крупными овощами.',
      en: 'Rich slow-simmered lamb broth with garden vegetables and aromatic mountain herbs.'
    }
  },
  {
    id: 13,
    categoryId: 'birinchi',
    isNew: false,
    isPopular: false,
    price: 42000,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Chuchvara Sho‘rva',
      ru: 'Чучвара в бульоне',
      en: 'Handmade Chuchvara Soup'
    },
    desc: {
      uz: 'Qo‘lda tugilgan mayda chuchvaralar, to‘yimli bulyon, qatiq va yangi ukrop bilan.',
      ru: 'Миниатюрные домашние пельмешки в прозрачном мясном бульоне с зеленью.',
      en: 'Delicate handmade beef dumplings in clear herb broth served with sour cream.'
    }
  },

  // Somsalar
  {
    id: 14,
    categoryId: 'somsalar',
    isNew: false,
    isPopular: true,
    price: 18000,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Tandir Somsa (Go‘shtli)',
      ru: 'Тандырная Самса с мясом',
      en: 'Crispy Tandoor Meat Somsa'
    },
    desc: {
      uz: 'Qat-qat xamir, maydalangan mol go‘shti, piyoz va xushbo‘y zira bilan tandirda yopilgan.',
      ru: 'Слоёное тесто, сочная рубленая говядина с луком и ароматной зирой из тандыра.',
      en: 'Flaky layered pastry stuffed with hand-minced beef, onions, and fragrant cumin seeds.'
    }
  },
  {
    id: 15,
    categoryId: 'somsalar',
    isNew: true,
    isPopular: false,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Pishloqli va Ismaloqli Somsa',
      ru: 'Самса со шпинатом и сыром',
      en: 'Spinach & Melted Cheese Somsa'
    },
    desc: {
      uz: 'Yangi yashil ismaloq, erigan pishloq va sariyog‘li qatlama xamiri.',
      ru: 'Свежий шпинат с нежным сыром сулугуни в хрустящем слоеном тесте.',
      en: 'Fresh garden spinach combined with melted cheese wrapped in golden flaky pastry.'
    }
  },

  // Salatlar
  {
    id: 16,
    categoryId: 'salatlar',
    isNew: false,
    isPopular: true,
    price: 48000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Sezar Salati Gril Tovuq Bilan',
      ru: 'Цезарь с курицей гриль',
      en: 'Classic Grilled Chicken Caesar'
    },
    desc: {
      uz: 'Aysberg barglari, parmezan pishlog‘i, qarsildoq suxariklar va xos Sezar sousi.',
      ru: 'Хрустящий айсберг, сочная куриная грудка, пармезан, сухарики и соус Цезарь.',
      en: 'Crisp iceberg lettuce, chargrilled chicken breast, parmesan ribbons and house caesar dressing.'
    }
  },
  {
    id: 17,
    categoryId: 'salatlar',
    isNew: false,
    isPopular: false,
    price: 36000,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Achchiq-Chuchuk (Milliy)',
      ru: 'Ачик-Чучук традиционный',
      en: 'Traditional Achik-Chuchuk'
    },
    desc: {
      uz: 'Yupqa to‘g‘ralgan shirin pomidorlar, piyoz, yashil rayhon va achchiq qalampir.',
      ru: 'Сладкие спелые томаты, тонкий лук, свежий базилик и острый перчик.',
      en: 'Thinly sliced ripe organic tomatoes, crisp onions, sweet purple basil, and hot chili.'
    }
  },
  {
    id: 18,
    categoryId: 'salatlar',
    isNew: true,
    isPopular: true,
    price: 52000,
    image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Olimp Garden Issiq Salati',
      ru: 'Теплый Салат Olimp Garden',
      en: 'Olimp Garden Warm Beef Salad'
    },
    desc: {
      uz: 'Grilda pishirilgan mayin mol go‘shti, rukola, qovurilgan baqlajon va kunjutli zaytun yog‘i.',
      ru: 'Обжаренная вырезка, свежая руккола, теплые баклажаны и кунжутная заправка.',
      en: 'Warm seared beef tenderloin strips tossed with baby arugula, roasted eggplant, and sesame glaze.'
    }
  },

  // Disertlar (Desserts)
  {
    id: 19,
    categoryId: 'disertlar',
    isNew: false,
    isPopular: true,
    price: 38000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Klassik Shokoladli Fondan',
      ru: 'Шоколадный Фондан с мороженым',
      en: 'Chocolate Lava Fondant'
    },
    desc: {
      uz: 'Ichidan oquvchi issiq Belgiya shokoladi, vanilli muzqaymoq shari bilan.',
      ru: 'Теплый десерт с тающей шоколадной серединкой и шариком ванильного пломбира.',
      en: 'Warm Belgian molten dark chocolate cake served with Madagascar vanilla bean gelato.'
    }
  },
  {
    id: 20,
    categoryId: 'disertlar',
    isNew: true,
    isPopular: false,
    price: 35000,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Pista Qaymoqli San-Sebastyan',
      ru: 'Чизкейк Сан-Себастьян с фисташкой',
      en: 'Pistachio San Sebastian Cheesecake'
    },
    desc: {
      uz: 'Ispancha kuydirilgan kremli chizkeyk, tabiiy pista pastasi va malina sousi bilan.',
      ru: 'Испанский жженый чизкейк с нежной текстурой, фисташковой пастой и малиной.',
      en: 'Basque burnt creamy cheesecake drizzled with real Sicilian pistachio sauce and raspberries.'
    }
  },

  // Salqin Ichimliklar (Cold Drinks)
  {
    id: 21,
    categoryId: 'ichimliklar',
    isNew: true,
    isPopular: true,
    price: 28000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Olimp Garden Yashil Oazis Limonadi',
      ru: 'Лимонад Olimp Garden Зеленый Оазис',
      en: 'Olimp Garden Green Oasis Lemonade'
    },
    desc: {
      uz: 'Yangi yalpiz, laym, bodring va yashil olma bilan tayyorlangan salqin ichimlik.',
      ru: 'Освежающий лимонад из свежей мяты, лайма, огурца и зеленого яблока.',
      en: 'Ultra-refreshing house lemonade crafted with fresh garden mint, lime, cucumber, and green apple.'
    }
  },
  {
    id: 22,
    categoryId: 'ichimliklar',
    isNew: false,
    isPopular: true,
    price: 26000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Rezavorli Muzli Choy (Berry Iced Tea)',
      ru: 'Ягодный Чай со льдом',
      en: 'Forest Berry Iced Tea'
    },
    desc: {
      uz: 'Tabiiy qulupnay, malina va tog‘ o‘tlaridan tayyorlangan xushbo‘y sovuq choy.',
      ru: 'Холодный чай из лесных ягод с добавлением горных трав и льда.',
      en: 'Brewed mountain herbal infusion sweetened with fresh forest raspberries, strawberries, and ice.'
    }
  },

  // Choy Assortimenti
  {
    id: 27,
    categoryId: 'choy',
    isNew: false,
    isPopular: true,
    price: 20000,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    name: {
      uz: 'Tog‘ O‘tlari va Yalpizli Kokteyl Choy',
      ru: 'Чай с горными травами и мятой',
      en: 'Mountain Herbal & Mint Tea'
    },
    desc: {
      uz: 'Za\'far, kiyik o‘ti, tog‘ yalpizi va asal bilan damlangan xushbo‘y choy.',
      ru: 'Ароматный травяной чай с чабрецом, мятой и мёдом.',
      en: 'Fragrant mountain herbal tea brewed with wild thyme, garden mint, and natural honey.'
    }
  }
];

// Customer Testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sardorbek Rahimov',
    role_uz: 'Doimiy mehmon',
    role_ru: 'Постоянный гость',
    role_en: 'Regular Guest',
    rating: 5,
    date: '2026',
    comment_uz: 'Urganchda bunday yashil va shinam restoran ochilganidan juda xursandmiz! Baliq taomlari, ayniqsa sudak shunchaki ajoyib. Xizmat ko‘rsatish va xodimlar xushmuomala. Oilaviy dam olish uchun birinchi raqamli joy.',
    comment_ru: 'Очень рады открытию такого зеленого оазиса в Ургенче! Блюда из рыбы, особенно судак, просто великолепны. Обслуживание на высшем уровне. Идеальное место для семейного ужина.',
    comment_en: 'We are thrilled with this green oasis in Urgench! The fish dishes, especially the zander, are absolutely top tier. Superb hospitality and magical garden vibe. Best restaurant for family dining.'
  },
  {
    id: 2,
    name: 'Elena Smirnova',
    role_uz: 'Sayyoh (Rossiya)',
    role_ru: 'Турист (Россия)',
    role_en: 'Traveler (Russia)',
    rating: 5,
    date: '2026',
    comment_uz: 'Xiva va Urganch safarimizda eng esda qolarli kechki ovqat Olimp Garden’da bo‘ldi. Interyer nihoyatda chiroyli, yashil o‘simliklar va yoqimli musiqa kishiga xotirjamlik bag‘ishlaydi. Ribay steyk juda mayin pishirilgan.',
    comment_ru: 'В нашей поездке по Хорезму лучший ужин был в Olimp Garden. Интерьер потрясающий — обилие живой зелени и уют. Стейк Рибай был невероятно сочным и мягким. Обязательно рекомендую!',
    comment_en: 'During our Khorezm trip, our finest dinner was at Olimp Garden. Gorgeous lush natural greenery and warm ambient lighting. The ribeye steak was cooked to perfection. Highly recommended!'
  },
  {
    id: 3,
    name: 'Jamshid Masharipov',
    role_uz: 'Tadbirkor / Biznes mehmondorchiligi',
    role_ru: 'Предприниматель / Корпоративный клиент',
    role_en: 'Entrepreneur / Corporate Guest',
    rating: 5,
    date: '2026',
    comment_uz: 'Biznes hamkorlarimiz bilan VIP xonada uchrashuv o‘tkazdik. Muhit juda sokin, xonalar shaxsiy va qulay. Shivit oshi va shashlik assortisi barchaga manzur bo‘ldi. Stolni onlayn band qilish juda oson ekan.',
    comment_ru: 'Провели деловую встречу с партнерами в VIP-комнате. Тихо, стильно и престижно. Хорезмский шивит оши и шашлыки впечатлили всех гостей. Онлайн-бронирование сработало безупречно.',
    comment_en: 'Hosted business partners in the private VIP room. Quiet, prestigious, and comfortable. The authentic shivit oshi and kebabs impressed everyone. Online table reservation was seamless.'
  }
];
