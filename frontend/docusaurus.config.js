// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "AI Engineering for Beginners — A Practical Guide",
  tagline: "A comprehensive guide to AI Engineering concepts and practices",
 

  url: "https://ArfaShoaib.github.io",
  baseUrl: "/ai_book/",

  organizationName: "ArfaShoaib",
  projectName: "ai_book",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    // ✅ Dark mode should be here
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "AI Engineering Book",
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Book',
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
          title: "Book Sections",
          items: [
            {
              label: 'Introduction to AI',
              to: '/docs/introduction-to-ai',
            },
            {
              label: 'Understanding LLMs',
              to: '/docs/understanding-llms',
            },
            {
              label: 'Prompt Engineering',
              to: '/docs/prompt-engineering',
            },
            {
              label: 'Spec-Driven Development',
              to: '/docs/spec-driven-development',
            },
            {
              label: 'Building AI Projects',
              to: '/docs/building-ai-projects',
            },
            {
              label: 'Deploying AI Apps',
              to: '/docs/deploying-ai-apps',
            },
            {
              label: 'Docusaurus + AI Book Workflow',
              to: '/docs/docusaurus-ai-book-workflow',
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ArfaShoaib/ai_book",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Engineering for Beginners — A Practical Guide. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
