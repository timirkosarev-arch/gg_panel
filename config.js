
// ==========================================================================
// FIREBASE CONFIG
// Возьми эти значения в Firebase Console -> Project settings -> General ->
// "Your apps" -> Web app (иконка </>) -> SDK setup and configuration -> Config
// ==========================================================================

const firebaseConfig = {
  apiKey: "ВАШ_API_KEY",
  authDomain: "ВАШ_ПРОЕКТ.firebaseapp.com",
  projectId: "ВАШ_ПРОЕКТ",
  storageBucket: "ВАШ_ПРОЕКТ.appspot.com",
  messagingSenderId: "ВАШ_SENDER_ID",
  appId: "ВАШ_APP_ID"
};

// ==========================================================================
// ОБЩИЕ НАСТРОЙКИ ПРИЛОЖЕНИЯ
// ==========================================================================

const APP_CONFIG = {
  // Email пользователя, который всегда премиум + видит админ-панель
  ADMIN_EMAIL: "timirkosarev@gmail.com",

  // Иконка приложения (правый верхний угол)
  APP_ICON_URL:
    "https://i.ibb.co.com/0yzGNWCg/png-transparent-rust-twitch-metal-face-skin-grime-rust-face-video-game-twitch-thumbnail-removebg-pre.png",

  // imgBB API key (для загрузки фото профиля)
  IMGBB_API_KEY: "91baa56297963d72b88d39e4aee75835",

  // Срок жизни ключа (мс) — 24 часа
  KEY_LIFETIME_MS: 24 * 60 * 60 * 1000,

  // Кулдаун между созданием ключей для бесплатных пользователей (мс) — 2 дня
  FREE_COOLDOWN_MS: 2 * 24 * 60 * 60 * 1000
};
