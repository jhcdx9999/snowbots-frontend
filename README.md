# Snowbots

Frontend package for `snowbots.net`, built with Vite, React, and TypeScript.

## Setup

Install dependencies:

```sh
npm install
```

Start local development:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Run the production static server:

```sh
npm start
```

Run with PM2:

```sh
pm2 start ecosystem.config.cjs
pm2 save
```

## Configuration

All editable site values live in `.env`.

- `PORT`: production server port used by `npm start` and PM2
- `VITE_SITE_URL`: production website URL
- `VITE_BOT_NAME`: displayed brand name
- `VITE_TAGLINE`: hero description
- `VITE_TELEGRAM_URL`: header and Explore Telegram link
- `VITE_TWITTER_URL`: footer Twitter/X link
- `VITE_HERO_IMAGE`: hero background image path
- `VITE_LOGO_IMAGE`: logo image path
- `VITE_ROBOT_IMAGE`: landing page robot image path
- `VITE_EXPLORE_LABEL`: hero button text
- `VITE_SUPPORTED_CHAINS`: chain list shown on the landing page
- `VITE_TRANSACTION_VOLUME`: displayed transaction volume
- `VITE_ACTIVE_WALLETS`: displayed active wallet count
- `VITE_HIGHEST_PROFIT`: displayed highest profit

The default hero image path is `/images/snowbots-hero.jpg`. Put the final JPG or PNG in `public/images/`, then update `VITE_HERO_IMAGE` if the filename changes.

Feature card icons are stored in `public/icons/` as local SVG files sourced from Lucide Static.
