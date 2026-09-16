/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_BOT_NAME: string;
  readonly VITE_TAGLINE: string;
  readonly VITE_TELEGRAM_URL: string;
  readonly VITE_TWITTER_URL: string;
  readonly VITE_HERO_IMAGE: string;
  readonly VITE_LOGO_IMAGE: string;
  readonly VITE_ROBOT_IMAGE: string;
  readonly VITE_EXPLORE_LABEL: string;
  readonly VITE_SUPPORTED_CHAINS: string;
  readonly VITE_TRANSACTION_VOLUME: string;
  readonly VITE_ACTIVE_WALLETS: string;
  readonly VITE_HIGHEST_PROFIT: string;
  readonly VITE_SMART_WALLETS_LIST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
