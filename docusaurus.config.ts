import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'monoZ Docs',
  tagline: 'Comprehensive guide to get started with monoZ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://docs.monoz.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'monoZ', // Usually your GitHub org/user name.
  projectName: 'monoZ Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          //routeBasePath: '/', // Set this value to '/'.
          sidebarPath: './sidebars.ts',
        },
        blog:  false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
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
