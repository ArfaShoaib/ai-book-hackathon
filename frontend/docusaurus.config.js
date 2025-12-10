// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Engineering for Beginners — A Practical Guide",
  tagline: "Learn AI Engineering with real-world tools, patterns, and workflows",
  favicon: "img/favicon.ico",

  // Keep exactly as you requested
  url: "https://ArfaShoaib.github.io",
  baseUrl: "/",                     // ← Kept "/"
  projectName: "ai_book",
  organizationName: "ArfaShoaib",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Remove routeBasePath if you want /docs to be the root docs path
        },
        blog: false, // set true only if you have a blog
        theme: {
          customCss: [require.resolve("./src/css/custom.css")], // ← Correct Tailwind entry
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",               // Looks amazing for AI books
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "AI Engineering Book",
      logo: {
        alt: "AI Book Logo",
        src: "img/logo.svg",             // Add your logo to static/img/
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Book",
        },
        {
          href: "https://github.com/ArfaShoaib/ai_book",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Chapters",
          items: [
            { label: "Introduction", to: "/docs/intro" },
            { label: "Understanding LLMs", to: "/docs/understanding-llms" },
            { label: "Prompt Engineering", to: "/docs/prompt-engineering" },
            { label: "Spec-Driven Development", to: "/docs/spec-driven-development" },
            { label: "Building AI Projects", to: "/docs/building-ai-projects" },
            { label: "Deploying AI Apps", to: "/docs/deploying-ai-apps" },
            { label: "Docusaurus + AI Book", to: "/docs/docusaurus-ai-book-workflow" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ArfaShoaib/ai_book",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Arfa Shoaib • Built with Docusaurus + Tailwind + shadcn/ui`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "python", "typescript", "json", "diff"],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  },
};

export default config;