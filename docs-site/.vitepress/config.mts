import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE ?? "/";
const siteOrigin = process.env.DOCS_SITE_ORIGIN ?? "https://pideck.caoayu.top";

// ===== 中文导航 & 侧边栏 =====
const zhNav = [
  { text: "首页", link: "/" },
  { text: "使用指南", link: "/guide/usage-guide" },
  { text: "功能介绍", link: "/guide/features" },
  { text: "FAQ", link: "/guide/faq" },
  { text: "产品对比", link: "/guide/comparison" },
  { text: "更新日志", link: "/changelog" },
  { text: "下载", link: "https://github.com/ayuayue/PiDeck/releases" },
];

const zhSidebar = {
  "/guide/": [
    {
      text: "指南",
      items: [
        { text: "完整使用指南（新手向）", link: "/guide/usage-guide" },
        { text: "快速开始", link: "/guide/getting-started" },
        { text: "功能介绍", link: "/guide/features" },
        { text: "配置与 Skills", link: "/guide/settings" },
        { text: "常见问题", link: "/guide/faq" },
        { text: "产品对比", link: "/guide/comparison" },
        { text: "开发与打包", link: "/guide/development" },
        { text: "贡献者", link: "/guide/contributors" },
      ],
    },
  ],
};

// ===== 英文导航 & 侧边栏 =====
const enNav = [
  { text: "Home", link: "/en/" },
  { text: "Guide", link: "/en/guide/usage-guide" },
  { text: "Features", link: "/en/guide/features" },
  { text: "FAQ", link: "/en/guide/faq" },
  { text: "Comparison", link: "/en/guide/comparison" },
  { text: "Changelog", link: "/en/changelog" },
  { text: "Download", link: "https://github.com/ayuayue/PiDeck/releases" },
];

const enSidebar = {
  "/en/guide/": [
    {
      text: "Guide",
      items: [
        { text: "Usage Guide", link: "/en/guide/usage-guide" },
        { text: "Quick Start", link: "/en/guide/getting-started" },
        { text: "Features", link: "/en/guide/features" },
        { text: "Settings & Skills", link: "/en/guide/settings" },
        { text: "FAQ", link: "/en/guide/faq" },
        { text: "Comparison", link: "/en/guide/comparison" },
        { text: "Development", link: "/en/guide/development" },
        { text: "Contributors", link: "/en/guide/contributors" },
      ],
    },
  ],
};

export default defineConfig({
  base,
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-CN",

  // ===== 语言区域定义 =====
  locales: {
    "/": {
      lang: "zh-CN",
      title: "PiDeck - pi Agent 桌面工作台",
      description:
        "PiDeck 是一款开源桌面工作台，用于在本地项目文件夹中管理多个 pi AI 编码助手。支持会话历史、Git 集成、内置终端和可视化配置管理。",
    },
    "/en/": {
      lang: "en",
      title: "PiDeck - pi Agent Desktop Workbench",
      description:
        "PiDeck is an open-source desktop workbench for managing multiple pi AI coding agents across local project folders. Features session history, Git integration, built-in terminal, and visual config management.",
    },
  },

  // ===== 主题配置（共享 + 各语言覆盖） =====
  themeConfig: {
    logo: "/icon.svg",
    siteTitle: "PiDeck",
    socialLinks: [{ icon: "github", link: "https://github.com/ayuayue/PiDeck" }],
    search: { provider: "local" },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 ayuayue",
    },

    // 各语言覆盖 nav、sidebar 等
    locales: {
      "/": {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: { label: "本页目录", level: [2, 3] },
        docFooter: { prev: "上一页", next: "下一页" },
        lastUpdated: {
          text: "最近更新",
          formatOptions: { dateStyle: "medium", timeStyle: "short" },
        },
        editLink: {
          pattern: "https://github.com/ayuayue/PiDeck/edit/main/docs-site/:path",
          text: "在 GitHub 上编辑此页",
        },
      },
      "/en/": {
        nav: enNav,
        sidebar: enSidebar,
        outline: { label: "On This Page", level: [2, 3] },
        docFooter: { prev: "Previous", next: "Next" },
        lastUpdated: {
          text: "Updated at",
          formatOptions: { dateStyle: "medium", timeStyle: "short" },
        },
        editLink: {
          pattern: "https://github.com/ayuayue/PiDeck/edit/main/docs-site/:path",
          text: "Edit this page on GitHub",
        },
      },
    },
  },

  // ===== 全局 head 标签 =====
  head: [
    ["link", { rel: "icon", href: `${base}icon.svg` }],
    ["link", { rel: "canonical", href: `${siteOrigin}/` }],
    ["meta", { name: "keywords", content: "PiDeck, pi, pi-agent, ai-coding-agent, desktop, electron, rpc, local-ai, developer-tools, coding-assistant, workspace, session-management, git, terminal, windows, macos, linux, open-source" }],
    ["meta", { name: "author", content: "ayuayue" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { property: "og:site_name", content: "PiDeck" }],
    ["meta", { property: "og:title", content: "PiDeck - pi Agent Desktop Workbench" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: `${siteOrigin}/` }],
    ["meta", { property: "og:image", content: `${siteOrigin}/og-image.png` }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "PiDeck - pi Agent Desktop Workbench" }],
    ["meta", { name: "twitter:description", content: "Manage multiple pi AI coding agents in local workspaces. Open-source desktop app with sessions, Git, terminal, and extensions." }],
    ["meta", { name: "twitter:image", content: `${siteOrigin}/og-image.png` }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "PiDeck",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Windows, macOS, Linux",
        description:
          "Open-source desktop workbench for managing multiple pi AI coding agents across local project folders.",
        url: siteOrigin,
        downloadUrl: "https://github.com/ayuayue/PiDeck/releases",
        sourceCodeRepository: "https://github.com/ayuayue/PiDeck",
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Organization", name: "ayuayue", url: "https://github.com/ayuayue" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      }),
    ],
  ],
});
