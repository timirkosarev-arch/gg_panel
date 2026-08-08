
// ==========================================================================
// FIREBASE CONFIG
// Возьми эти значения в Firebase Console -> Project settings -> General ->
// "Your apps" -> Web app (иконка </>) -> SDK setup and configuration -> Config
// ==========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyD2ktWb24Nxn2ZWVeLPiBfav9GvWRHrOmk",
  authDomain: "neverfuse-6a03e.firebaseapp.com",
  databaseURL: "https://neverfuse-6a03e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "neverfuse-6a03e",
  storageBucket: "neverfuse-6a03e.firebasestorage.app",
  messagingSenderId: "24127864097",
  appId: "1:24127864097:web:365803fc332d3a3d359260",
  measurementId: "G-LPPRNGNEQG"
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
