import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';

export const langKeys: InlineKeyboardMarkup = {
  inline_keyboard: [
    [Markup.button.callback(`O'zbek 🇺🇿`, 'uz')],
    [Markup.button.callback('English 🇺🇸', 'en')],
    [Markup.button.callback('Русский 🇷🇺', 'ru')],
  ],
};

export const menuKeys = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback(`🛒 Do'kon`, 'shop'),
        Markup.button.callback('👤 Kabinet', 'profile'),
      ],
      [
        Markup.button.callback(`📕 Qo'llanma`, 'manual'),
        Markup.button.callback(`☎️ Yordam uchun`, 'forHelp'),
      ],
    ],
  },
  en: {
    inline_keyboard: [
      [
        Markup.button.callback(`🛒 Shop`, 'shop'),
        Markup.button.callback('👤 Profile', 'profile'),
      ],
      [
        Markup.button.callback(`📕 Manual`, 'manual'),
        Markup.button.callback(`☎️ Help`, 'forHelp'),
      ],
    ],
  },
  ru: {
    inline_keyboard: [
      [
        Markup.button.callback(`🛒 Магазин`, 'shop'),
        Markup.button.callback('👤 Профиль', 'profile'),
      ],
      [
        Markup.button.callback(`📕 Руководство`, 'manual'),
        Markup.button.callback(`☎️ Помощь`, 'forHelp'),
      ],
    ],
  },
};

export const profileKeys = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback('🌐 Buyurtmalar tarixi', 'orderHistory'),
        Markup.button.callback("📊 To'lovlar tarixi", 'paymentHistory'),
      ],
      [
        Markup.button.callback("💰 Xisob to'ldirish", 'startPayment'),
        Markup.button.callback("🌐 Tilni o'zgartirish", 'changeLang'),
      ],
      [Markup.button.callback('🔙 Menyuga qaytish', 'backToMenu')],
    ],
  },
  en: {
    inline_keyboard: [
      [
        Markup.button.callback('🌐 Order History', 'orderHistory'),
        Markup.button.callback('📊 Payment History', 'paymentHistory'),
      ],
      [
        Markup.button.callback('💰 Top up account', 'startPayment'),
        Markup.button.callback('🌐 Change Language', 'changeLang'),
      ],
      [Markup.button.callback('🔙 Back to Menu', 'backToMenu')],
    ],
  },
  ru: {
    inline_keyboard: [
      [
        Markup.button.callback('🌐 История заказов', 'orderHistory'),
        Markup.button.callback('📊 История платежей', 'paymentHistory'),
      ],
      [
        Markup.button.callback('💰 Пополнить счет', 'startPayment'),
        Markup.button.callback('🌐 Сменить язык', 'changeLang'),
      ],
      [Markup.button.callback('🔙 Назад в меню', 'backToMenu')],
    ],
  },
};

export const setLangKeys = {
  uz: {
    inline_keyboard: [
      [Markup.button.callback(`O'zbek 🇺🇿`, 'setUz')],
      [Markup.button.callback('English 🇺🇸', 'setEn')],
      [Markup.button.callback('Русский 🇷🇺', 'setRu')],
      [Markup.button.callback('🔙 Kabinetga qaytish', 'backToProfile')],
    ],
  },
  en: {
    inline_keyboard: [
      [Markup.button.callback(`O'zbek 🇺🇿`, 'setUz')],
      [Markup.button.callback('English 🇺🇸', 'setEn')],
      [Markup.button.callback('Русский 🇷🇺', 'setRu')],
      [Markup.button.callback('🔙 Back to Profile', 'backToProfile')],
    ],
  },
  ru: {
    inline_keyboard: [
      [Markup.button.callback(`O'zbek 🇺🇿`, 'setUz')],
      [Markup.button.callback('English 🇺🇸', 'setEn')],
      [Markup.button.callback('Русский 🇷🇺', 'setRu')],
      [Markup.button.callback('🔙 Вернуться в профиль', 'backToProfile')],
    ],
  },
};

export const shopKeys = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback('🎮 PUBG MOBILE', 'pubg'),
        Markup.button.callback('🔥 FREE FIRE', 'ff'),
      ],
      [
        Markup.button.callback('🏆 MLBB SNG', 'mlbb_sng'),
        Markup.button.callback('🏆 MLBB TURK', 'mlbb_turk'),
      ],
      [Markup.button.callback('🔙 Menyuga qaytish', 'backToMenu')],
    ],
  },

  en: {
    inline_keyboard: [
      [
        Markup.button.callback('🎮 PUBG MOBILE', 'pubg'),
        Markup.button.callback('🔥 FREE FIRE', 'ff'),
      ],
      [
        Markup.button.callback('🏆 MLBB SNG', 'mlbb_sng'),
        Markup.button.callback('🏆 MLBB TURK', 'mlbb_turk'),
      ],
      [Markup.button.callback('🔙 Back to menu', 'backToMenu')],
    ],
  },

  ru: {
    inline_keyboard: [
      [
        Markup.button.callback('🎮 PUBG MOBILE', 'pubg'),
        Markup.button.callback('🔥 FREE FIRE', 'ff'),
      ],
      [
        Markup.button.callback('🏆 MLBB SNG', 'mlbb_sng'),
        Markup.button.callback('🏆 MLBB TURK ', 'mlbb_turk'),
      ],
      [Markup.button.callback('🔙 Назад в меню', 'backToMenu')],
    ],
  },
};

export const backToMenuKeys = {
  uz: {
    inline_keyboard: [
      [Markup.button.callback('🔙 Menyuga qaytish', 'backToMenu')],
    ],
  },
  en: {
    inline_keyboard: [
      [Markup.button.callback('🔙 Back to menu', 'backToMenu')],
    ],
  },
  ru: {
    inline_keyboard: [
      [Markup.button.callback('🔙 Назад в меню', 'backToMenu')],
    ],
  },
};

export const pubgKeys = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback(
          "💰 60 UC - 13.000 So'm",
          'shop_key=PUBG MOBILE=13000=60 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 120 UC - 26.000 So'm",
          'shop_key=PUBG MOBILE=26000=120 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 180 UC - 39.000 So'm",
          'shop_key=PUBG MOBILE=39000=180 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 325 UC - 60.000 So'm",
          'shop_key=PUBG MOBILE=60000=325 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 385 UC - 70.000 So'm",
          'shop_key=PUBG MOBILE=70000=385 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 660 UC - 118.000 So'm",
          'shop_key=PUBG MOBILE=118000=660 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 720 UC - 130.000 So'm",
          'shop_key=PUBG MOBILE=130000=720 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 985 UC - 180.000 So'm",
          'shop_key=PUBG MOBILE=180000=985 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 1320 UC - 230.000 So'm",
          'shop_key=PUBG MOBILE=230000=1320 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 1800 UC - 290.000 So'm",
          'shop_key=PUBG MOBILE=290000=1800 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 3850 UC - 580.000 So'm",
          'shop_key=PUBG MOBILE=580000=3850 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 8100 UC - 1.150.000 So'm",
          'shop_key=PUBG MOBILE=1150000=8100 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 11950 UC - 1.660.000 So'm",
          'shop_key=PUBG MOBILE=1660000=11950 uc',
        ),
      ],
      [
        Markup.button.callback(
          "💰 16200 UC - 2.200.000 So'm",
          'shop_key=PUBG MOBILE=2200000=16200 uc',
        ),
      ],
      [Markup.button.callback("🔙 Do'konga qaytish", 'backToShop')],
    ],
  },

  en: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💰 60 UC - 13,000 UZS',
          'shop_key=PUBG MOBILE=13000=60 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 120 UC - 26,000 UZS',
          'shop_key=PUBG MOBILE=26000=120 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 180 UC - 39,000 UZS',
          'shop_key=PUBG MOBILE=39000=180 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 325 UC - 60,000 UZS',
          'shop_key=PUBG MOBILE=60000=325 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 385 UC - 70,000 UZS',
          'shop_key=PUBG MOBILE=70000=385 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 660 UC - 118,000 UZS',
          'shop_key=PUBG MOBILE=118000=660 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 720 UC - 130,000 UZS',
          'shop_key=PUBG MOBILE=130000=720 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 985 UC - 180,000 UZS',
          'shop_key=PUBG MOBILE=180000=985 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 1320 UC - 230,000 UZS',
          'shop_key=PUBG MOBILE=230000=1320 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 1800 UC - 290,000 UZS',
          'shop_key=PUBG MOBILE=290000=1800 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 3850 UC - 580,000 UZS',
          'shop_key=PUBG MOBILE=580000=3850 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 8100 UC - 1,150,000 UZS',
          'shop_key=PUBG MOBILE=1150000=8100 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 11950 UC - 1,660,000 UZS',
          'shop_key=PUBG MOBILE=1660000=11950 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 16200 UC - 2,200,000 UZS',
          'shop_key=PUBG MOBILE=2200000=16200 uc',
        ),
      ],
      [Markup.button.callback('🔙 Back to shop', 'backToShop')],
    ],
  },

  ru: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💰 60 UC - 13.000 сум',
          'shop_key=PUBG MOBILE=13000=60 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 120 UC - 26.000 сум',
          'shop_key=PUBG MOBILE=26000=120 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 180 UC - 39.000 сум',
          'shop_key=PUBG MOBILE=39000=180 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 325 UC - 60.000 сум',
          'shop_key=PUBG MOBILE=60000=325 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 385 UC - 70.000 сум',
          'shop_key=PUBG MOBILE=70000=385 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 660 UC - 118.000 сум',
          'shop_key=PUBG MOBILE=118000=660 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 720 UC - 130.000 сум',
          'shop_key=PUBG MOBILE=130000=720 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 985 UC - 180.000 сум',
          'shop_key=PUBG MOBILE=180000=985 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 1320 UC - 230.000 сум',
          'shop_key=PUBG MOBILE=230000=1320 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 1800 UC - 290.000 сум',
          'shop_key=PUBG MOBILE=290000=1800 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 3850 UC - 580.000 сум',
          'shop_key=PUBG MOBILE=580000=3850 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 8100 UC - 1.150.000 сум',
          'shop_key=PUBG MOBILE=1150000=8100 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 11950 UC - 1.660.000 сум',
          'shop_key=PUBG MOBILE=1660000=11950 uc',
        ),
      ],
      [
        Markup.button.callback(
          '💰 16200 UC - 2.200.000 сум',
          'shop_key=PUBG MOBILE=2200000=16200 uc',
        ),
      ],
      [Markup.button.callback('🔙 Вернуться в магазин', 'backToShop')],
    ],
  },
};

export const freeFireKeys = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback(
          `💎 105 almaz - 15.000 so'm`,
          'shop_key=FREE FIRE=15000=105 💎',
        ),
      ],
      [
        Markup.button.callback(
          `💎 210 almaz - 30.000 so'm`,
          `shop_key=FREE FIRE=30000=210 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 326 almaz - 42.000 so'm`,
          `shop_key=FREE FIRE=42000=326 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 546 almaz - 65.000 so'm`,
          `shop_key=FREE FIRE=65000=546 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1101 almaz - 125.000 so'm`,
          `shop_key=FREE FIRE=125000=1101 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1500 almaz - 190.000 so'm`,
          `shop_key=FREE FIRE=190000=1500 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 2400 almaz - 250.000 so'm`,
          `shop_key=FREE FIRE=250000=2400 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 6100 almaz - 650.000 so'm`,
          `shop_key=FREE FIRE=650000=6100 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Haftalik vaucher 450 - 25.000 so'm`,
          `shop_key=FREE FIRE=25000=450=haftalik vaucher`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Oylik vaucher 2600 - 150.000 so'm`,
          `shop_key=FREE FIRE=150000=2600=Oylik vaucher`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Propusk prokachka 800 - 35.000 so'm`,
          `shop_key=FREE FIRE=35000=800=Propusk prokachka`,
        ),
      ],
      [Markup.button.callback(`🔙 Do'konga qaytish`, 'backToShop')],
    ],
  },
  en: {
    inline_keyboard: [
      [
        Markup.button.callback(
          `💎 105 diamonds - 15,000 UZS`,
          'shop_key=FREE FIRE=15000=105 💎',
        ),
      ],
      [
        Markup.button.callback(
          `💎 210 diamonds - 30,000 UZS`,
          `shop_key=FREE FIRE=30000=210 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 326 diamonds - 42,000 UZS`,
          `shop_key=FREE FIRE=42000=326 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 546 diamonds - 65,000 UZS`,
          `shop_key=FREE FIRE=65000=546 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1101 diamonds - 125,000 UZS`,
          `shop_key=FREE FIRE=125000=1101 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1500 diamonds - 190,000 UZS`,
          `shop_key=FREE FIRE=190000=1500 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 2400 diamonds - 250,000 UZS`,
          `shop_key=FREE FIRE=250000=2400`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 6100 diamonds - 650,000 UZS`,
          `shop_key=FREE FIRE=650000=6100 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Weekly voucher 450 - 25,000 UZS`,
          `shop_key=FREE FIRE=25000=450=weekly voucher`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Monthly voucher 2600 - 150,000 UZS`,
          `shop_key=FREE FIRE=150000=2600=monthly voucher`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Pass upgrade 800 - 35,000 UZS`,
          `shop_key=FREE FIRE=35000=800=pass upgrade`,
        ),
      ],
      [Markup.button.callback(`🔙 Back to shop`, 'backToShop')],
    ],
  },
  ru: {
    inline_keyboard: [
      [
        Markup.button.callback(
          `💎 105 алмазов - 15,000 сум`,
          'shop_key=FREE FIRE=15000=105 💎',
        ),
      ],
      [
        Markup.button.callback(
          `💎 210 алмазов - 30,000 сум`,
          `shop_key=FREE FIRE=30000=210 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 326 алмазов - 42,000 сум`,
          `shop_key=FREE FIRE=42000=326 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 546 алмазов - 65,000 сум`,
          `shop_key=FREE FIRE=65000=546 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1101 алмазов - 125,000 сум`,
          `shop_key=FREE FIRE=125000=1101 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 1500 алмазов - 190,000 сум`,
          `shop_key=FREE FIRE=190000=1500 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 2400 алмазов - 250,000 сум`,
          `shop_key=FREE FIRE=250000=2400 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 6100 алмазов - 650,000 сум`,
          `shop_key=FREE FIRE=650000=6100 💎`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Недельный ваучер 450 - 25,000 сум`,
          `shop_key=FREE FIRE=25000=450=недельный ваучер`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Месячный ваучер 2600 - 150,000 сум`,
          `shop_key=FREE FIRE=150000=2600=месячный ваучер`,
        ),
      ],
      [
        Markup.button.callback(
          `💎 Улучшение пропуска 800 - 35,000 сум`,
          `shop_key=FREE FIRE=35000=800=улучшение пропуска`,
        ),
      ],
      [Markup.button.callback(`🔙 Вернуться в магазин`, 'backToShop')],
    ],
  },
};

export const mobileLegendsSng = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback(
          "💎 ALMAZ propusk - 20 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=20000=propusk',
        ),
      ],
      [
        Markup.button.callback(
          "💎 8 ALMAZ ML - 3 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=3000=8 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 35 ALMAZ ML - 7 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=7000=35 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 88 ALMAZ ML - 17 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=17000=88 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 132 ALMAZ ML - 25 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=25000=132 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 264 ALMAZ ML - 45 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=45000=264 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 440 ALMAZ ML - 73 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=73000=440 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 734 ALMAZ ML - 113 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=113000=734 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 933 ALMAZ ML - 145 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=145000=933 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 1410 ALMAZ ML - 215 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=215000=1410',
        ),
      ],
      [
        Markup.button.callback(
          "💎 1881 ALMAZ ML - 281 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=281000=1881 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 2845 ALMAZ ML - 430 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=430000=2845 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 6163 ALMAZ ML - 900 000 so'm",
          'shop_key=MOBILE LEGENDS_SNG=900000=6163 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Do'konga qaytish`, 'backToShop')],
    ],
  },
  en: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💎 Diamond Pass - 20,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=20000=propusk',
        ),
      ],
      [
        Markup.button.callback(
          '💎 8 Diamonds ML - 3,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=3000=8 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 35 Diamonds ML - 7,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=7000=35 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 88 Diamonds ML - 17,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=17000=88 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 132 Diamonds ML - 25,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=25000=132 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 264 Diamonds ML - 45,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=45000=264 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 440 Diamonds ML - 73,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=73000=440 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 734 Diamonds ML - 113,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=113000=734 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 933 Diamonds ML - 145,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=145000=933 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1410 Diamonds ML - 215,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=215000=1410 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1881 Diamonds ML - 281,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=281000=1881 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 2845 Diamonds ML - 430,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=430000=2845 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 6163 Diamonds ML - 900,000 UZS',
          'shop_key=MOBILE LEGENDS_SNG=900000=6163 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Back to shop`, 'backToShop')],
    ],
  },
  ru: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💎 Пропуск Алмазов - 20 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=20000=propusk',
        ),
      ],
      [
        Markup.button.callback(
          '💎 8 Алмазов ML - 3 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=3000=8 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 35 Алмазов ML - 7 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=7000=35 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 88 Алмазов ML - 17 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=17000=88 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 132 Алмазов ML - 25 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=25000=132 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 264 Алмазов ML - 45 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=45000=264 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 440 Алмазов ML - 73 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=73000=440 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 734 Алмазов ML - 113 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=113000=734 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 933 Алмазов ML - 145 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=145000=933 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1410 Алмазов ML - 215 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=215000=1410 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1881 Алмазов ML - 281 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=281000=1881 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 2845 Алмазов ML - 430 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=430000=2845 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 6163 Алмазов ML - 900 000 сум',
          'shop_key=MOBILE LEGENDS_SNG=900000=6163 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Вернуться в магазин`, 'backToShop')],
    ],
  },
};

export const mobileLegendsTurk = {
  uz: {
    inline_keyboard: [
      [
        Markup.button.callback(
          "💎 11 almaz - 5,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=5000=11 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 22 almaz - 7,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=7000=22 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 56 almaz - 13,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=13000=56 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 112 almaz - 25,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=25000=112 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 223 almaz - 48,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=48000=223 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 336 almaz - 70,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=70000=336 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 570 almaz - 115,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=115000=570 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 1163 almaz - 230,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=230000=1163 💎',
        ),
      ],
      [
        Markup.button.callback(
          "💎 2398 almaz - 450,000 so'm",
          'shop_key=MOBILE LEGENDS_TURK=450000=2398 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Do'konga qaytish`, 'backToShop')],
    ],
  },
  ru: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💎 11 алмаз - 5,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=5000=11 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 22 алмаз - 7,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=7000=22 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 56 алмаз - 13,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=13000=56 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 112 алмаз - 25,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=25000=112 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 223 алмаз - 48,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=48000=223 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 336 алмаз - 70,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=70000=336 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 570 алмаз - 115,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=115000=570 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1163 алмаз - 230,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=230000=1163 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 2398 алмаз - 450,000 сум',
          'shop_key=MOBILE LEGENDS_TURK=450000=2398 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Вернуться в магазин`, 'backToShop')],
    ],
  },
  en: {
    inline_keyboard: [
      [
        Markup.button.callback(
          '💎 11 diamonds - 5,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=5000=11 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 22 diamonds - 7,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=7000=22 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 56 diamonds - 13,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=13000=56 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 112 diamonds - 25,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=25000=112 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 223 diamonds - 48,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=48000=223 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 336 diamonds - 70,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=70000=336 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 570 diamonds - 115,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=115000=570 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 1163 diamonds - 230,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=230000=1163 💎',
        ),
      ],
      [
        Markup.button.callback(
          '💎 2398 diamonds - 450,000 UZS',
          'shop_key=MOBILE LEGENDS_TURK=450000=2398 💎',
        ),
      ],
      [Markup.button.callback(`🔙 Back to shop`, 'backToShop')],
    ],
  },
};

export const paymentButtons = {
  uz: {
    inline_keyboard: [
      [Markup.button.callback(`💰 Xisob to'ldirish`, 'startPayment')],
      [Markup.button.callback("🔙 Do'konga qaytish", 'backToShop')],
    ],
  },
  en: {
    inline_keyboard: [
      [Markup.button.callback('💰 Top up account', 'startPayment')],
      [Markup.button.callback('🔙 Back to shop', 'backToShop')],
    ],
  },
  ru: {
    inline_keyboard: [
      [Markup.button.callback('💰 Пополнить счет', 'startPayment')],
      [Markup.button.callback('🔙 Вернуться в магазин', 'backToShop')],
    ],
  },
};

export const backToShop = {
  uz: {
    inline_keyboard: [
      [Markup.button.callback("🔙 Do'konga qaytish", 'backToShop')],
    ],
  },
  en: {
    inline_keyboard: [
      [Markup.button.callback('🔙 Back to shop', 'backToShop')],
    ],
  },
  ru: {
    inline_keyboard: [
      [Markup.button.callback('🔙 Вернуться в магазин', 'backToShop')],
    ],
  },
};

export const paymentMethods = {
  uz: {
    inline_keyboard: [
      [Markup.button.callback("Rossiyadan O'zbekistonga AloqaBank", 'pay')],
      [Markup.button.callback("O'zbekiston hududidan AloqaBank", 'pay')],
      [Markup.button.callback('🔙 Kabinetga qaytish', 'backToProfile')],
    ],
  },
  en: {
    inline_keyboard: [
      [Markup.button.callback('AloqaBank from Russia to Uzbekistan', 'pay')],
      [Markup.button.callback('AloqaBank within Uzbekistan', 'pay')],
      [Markup.button.callback('🔙 Back to Profile', 'backToProfile')],
    ],
  },
  ru: {
    inline_keyboard: [
      [Markup.button.callback('АлоқаБанк из России в Узбекистан', 'pay')],
      [Markup.button.callback('АлоқаБанк в пределах Узбекистана', 'pay')],
      [Markup.button.callback('🔙 Вернуться в профиль', 'backToProfile')],
    ],
  },
};
