// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React ChatBotify',
  tagline: 'A modern React library for creating a flexible and extensible chatbot.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://react-chatbotify.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tjtanjin', // Usually your GitHub org/user name.
  projectName: 'react-chatbotify-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'react, chatbot, chat, chatbotify, conversational-chatbot'}
      ],
      navbar: {
        title: 'React ChatBotify',
        logo: {
          alt: 'React ChatBotify Logo',
          src: 'img/react-chatbotify.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Playground',
            to: '/playground',
            position: 'left',
          },
          {
            label: 'Gallery',
            to: 'https://gallery.react-chatbotify.com',
            position: 'left',
          },
          {
            label: 'Contributing',
            to: 'https://github.com/tjtanjin/react-chatbotify#contributing',
            position: 'left',
          },
          {
            href: 'https://github.com/tjtanjin/react-chatbotify',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/6R4DK4G5Zh',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'JOCIO5HXBI',
  
        // Public API key: it is safe to commit it
        apiKey: 'eb2e5725e235ffcdbaa35ea6cccb00be',
  
        indexName: 'react-chatbotify-tjtanjin-v2',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      announcementBar: {
        id: 'announcement-bar',
        content: 'Info: v2 of the chatbot is in <a target="_blank" rel="noopener noreferrer" href="https://react-chatbotify.com/docs/introduction/migration_v2"><b>beta release</b></a>. If you are still on v1, you can find legacy documentation <a target="_blank" rel="noopener noreferrer" href="https://react-chatbotify.com/legacy/v1"><b>here</b></a>. Issues, suggestions or bug reports are welcome on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/6R4DK4G5Zh"><b>discord</b></a>.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Quickstart',
                to: '/docs/introduction/quickstart',
              },
              {
                label: 'Overview',
                to: '/docs/introduction/overview',
              },
              {
                label: 'API Documentation',
                to: '/docs/api/settings',
              },
              {
                label: 'Examples',
                to: '/docs/examples/basic_form',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6R4DK4G5Zh',
              },
              {
                label: 'Lounge',
                href: 'https://discord.gg/X8VSdZvBQY',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/tjtanjin/react-chatbotify/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Articles',
                href: 'https://medium.com/@tjtanjin/how-to-setup-a-chatbot-with-react-chatbotify-a-step-by-step-tutorial-65c8a09bad19',
              },
              {
                label: 'Changelog',
                href: 'https://github.com/tjtanjin/react-chatbotify/blob/main/CHANGELOG.md',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/tjtanjin/react-chatbotify',
              },
            ],
          },
        ],
        logo: {
          alt: 'React ChatBotify Logo',
          src: 'img/react-chatbotify.png',
          href: 'https://www.npmjs.com/package/react-chatbotify',
          width: 100,
          height: 100,
        },
        copyright: `Copyright © ${new Date().getFullYear()} React ChatBotify.`,
      },
    })
};

module.exports = config;
