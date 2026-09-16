import {
  ArrowUpRight,
  Bot,
  CircleHelp,
} from "lucide-react";
import type { CSSProperties } from "react";

const config = {
  siteUrl: import.meta.env.VITE_SITE_URL,
  botName: import.meta.env.VITE_BOT_NAME,
  tagline: import.meta.env.VITE_TAGLINE,
  telegramUrl: import.meta.env.VITE_TELEGRAM_URL,
  twitterUrl: import.meta.env.VITE_TWITTER_URL,
  heroImage: import.meta.env.VITE_HERO_IMAGE,
  logoImage: import.meta.env.VITE_LOGO_IMAGE,
  robotImage: import.meta.env.VITE_ROBOT_IMAGE,
  exploreLabel: import.meta.env.VITE_EXPLORE_LABEL,
  supportedChains: import.meta.env.VITE_SUPPORTED_CHAINS,
  transactionVolume: import.meta.env.VITE_TRANSACTION_VOLUME,
  activeWallets: import.meta.env.VITE_ACTIVE_WALLETS,
  highestProfit: import.meta.env.VITE_HIGHEST_PROFIT,
  smartWalletsList: import.meta.env.VITE_SMART_WALLETS_LIST,
};

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Q&A", href: "#qa" },
];

const dashboardStats = [
  { value: config.transactionVolume, label: "Transaction volume" },
  { value: config.activeWallets, label: "Active wallets" },
  { value: config.highestProfit.replace(/\s*USDC$/i, ""), unit: "USDC", label: "Highest profit" },
  { value: config.smartWalletsList, label: "Smart wallets list" },
];

const features: Array<{
  id: string;
  icon: string;
  title: string;
  copy: string;
}> = [
  {
    id: "sniper",
    icon: "/icons/token-sniper.svg",
    title: "Token Sniper",
    copy: "A Telegram-first trading bot for launch monitoring, token discovery, and rapid entry preparation.",
  },
  {
    id: "copy-trade",
    icon: "/icons/wallet-copy.svg",
    title: "Wallet Copy Trading",
    copy: "Follow selected on-chain wallets and keep trading activity organized inside a familiar TG flow.",
  },
  {
    id: "risk",
    icon: "/icons/risk-dashboard.svg",
    title: "Performance Dashboard",
    copy: "Present trading performance, activity snapshots, and high-level bot metrics before users open the bot.",
  },
  {
    id: "chains",
    icon: "/icons/multi-chain.svg",
    title: "Multi-Chain Coverage",
    copy: `Designed around high-activity markets across ${config.supportedChains}.`,
  },
  {
    id: "signals",
    icon: "/icons/signal-overview.svg",
    title: "Signal Overview",
    copy: "Showcase market awareness, wallet tracking, and token monitoring without executing trades on the website.",
  },
];

const questions = [
  {
    question: "Can I trade directly on this website?",
    answer: "No. The website is only a showcase and entry point. All trading workflows are handled inside the Telegram bot.",
  },
  {
    question: "What does Snowbots focus on?",
    answer: "Snowbots focuses on token sniping, profitable smart-wallet discovery, wallet tracking, copy trading, and fast Telegram-native workflows.",
  },
  {
    question: "Where can I change settings?",
    answer: "Trading settings, wallet connections, alerts, and automation rules should be managed inside the TG bot.",
  },
  {
    question: "Which chains are displayed?",
    answer: `The current public display highlights ${config.supportedChains}. You can edit this in the environment config.`,
  },
];

export function App() {
  const heroStyle = {
    "--hero-image": `url("${config.heroImage}")`,
  } as CSSProperties;

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href={config.siteUrl} aria-label={`${config.botName} home`}>
          <img className="brand-logo" src={config.logoImage} alt="" aria-hidden="true" />
          <span>{config.botName}</span>
        </a>

        <nav className="desktop-nav" aria-label="Page sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="telegram-link" href={config.telegramUrl} target="_blank" rel="noreferrer">
          <Bot size={18} strokeWidth={2.4} />
          <span>Open TG</span>
        </a>
      </header>

      <section className="hero" style={heroStyle}>
        <div className="hero-copy-block">
          <p className="eyebrow">Telegram trading bot / {config.supportedChains}</p>
          <h1>{config.botName}</h1>
          <p className="hero-copy">{config.tagline}</p>

          <div className="hero-actions">
            <a className="explore-button" href={config.telegramUrl} target="_blank" rel="noreferrer">
              <span>{config.exploreLabel}</span>
              <ArrowUpRight size={19} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <aside className="hero-art" aria-label="Snowbots robot showcase">
          <div className="snowflake snowflake-one" aria-hidden="true" />
          <div className="snowflake snowflake-two" aria-hidden="true" />
          <img className="hero-robot" src={config.robotImage} alt="Snowbots robot" />
        </aside>
      </section>

      <section className="stat-strip" id="dashboard" aria-label="Snowbots public dashboard">
        {dashboardStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong className="stat-value">
              {stat.value}
              {stat.unit ? <span className="stat-unit">{stat.unit}</span> : null}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="smart-wallet-band" aria-label="Smart Wallet Discovery">
        <div className="smart-wallet-content">
          <p className="eyebrow">Core intelligence layer</p>
          <h2>Smart Wallet Discovery</h2>
          <p>Find profitable smart wallets worth tracking.</p>
        </div>

        <div className="smart-wallet-points" aria-label="Smart wallet discovery highlights">
          <div>
            <strong>Hot pair winners</strong>
            <span>Identify wallets capturing strong gains from recently active or trending trading pairs.</span>
          </div>
          <div>
            <strong>Smart addresses</strong>
            <span>Highlight addresses with long-cycle profitability and consistent on-chain trading performance.</span>
          </div>
          <div>
            <strong>Telegram-first workflow</strong>
            <span>Discovery, tracking, alerts, and trading decisions stay inside the TG bot.</span>
          </div>
        </div>
      </section>

      <section className="feature-band" id="features" aria-label="Snowbots features">
        <div className="section-heading">
          <p className="eyebrow">Project overview</p>
          <h2>Services</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" id={feature.id} key={feature.id}>
              <div className="feature-icon" aria-hidden="true">
                <img src={feature.icon} alt="" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="qa-band" id="qa" aria-label="Popular questions">
        <div className="qa-heading">
          <p className="eyebrow">Popular Q&A</p>
          <h2>IMPORTANT TO KNOW</h2>
        </div>

        <div className="qa-list">
          {questions.map((item) => (
            <article className="qa-item" key={item.question}>
              <div className="qa-icon" aria-hidden="true">
                <CircleHelp size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={config.logoImage} alt="" aria-hidden="true" />
          <p>{config.botName}</p>
        </div>
        <div className="footer-links">
          <nav aria-label="Overview links">
            <h3>Overview</h3>
            <a href="#features">Services</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#qa">Q&A</a>
          </nav>
          <nav aria-label="Contact links">
            <h3>Contact</h3>
            <a href={config.twitterUrl} target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href={config.telegramUrl} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
