import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'monoZ Docs',
  tagline: 'Comprehensive guide to get started with monoZ',
  favicon: 'img/favicon.ico',

  url: 'https://docs.monoz.io/',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'monoZ',
  projectName: 'monoZ Docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 🌐 Internationalization config
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/monoZ-social-card.jpg',
    prism: {
      theme: prismThemes.jettwaveDark,
    },
    navbar: {
      title: 'monoZ Docs',
      logo: {
        alt: 'monoZ Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://monoz.io/',
          label: 'monoZ Home',
          position: 'right',
        },
        {
          href: 'https://link.monoz.io/',
          label: 'monoZ:Link Portal',
          position: 'right',
        },
        {
          type: 'localeDropdown', // 🌍 Language dropdown
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} All rights Reserved.`,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: '/css/prism-duotone-space.css',
      type: 'text/css',
    },
  ],
};

export default config;
