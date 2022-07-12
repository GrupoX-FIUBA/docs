// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spotifiuby',
  tagline: 'Taller de programación II - FIUBA',
  url: 'https://spotifiuby.com.ar',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GrupoX-FIUBA', // Usually your GitHub org/user name.
  projectName: 'Spotifiuby', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/GrupoX-FIUBA/docs',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Spotifiuby',
        logo: {
          alt: 'Spotifiuby Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/GrupoX-FIUBA/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introducción',
                to: '/intro',
              },
              {
                label: 'Arquitectura',
                to: '/arquitectura',
              },
              {
                label: 'Guías de usuario',
                to: '/guias',
              },
              {
                label: 'Bitácora de proyecto',
                to: '/bitacora',
              },
              {
                label: 'Análisis postmortem',
                to: '/postmortem',
              },
            ],
          },
          {
            title: 'Software',
            items: [
              {
                label: 'Application',
                href: 'https://app.spotifiuby.com.ar',
              },
              {
                label: 'Twitter',
                href: 'https://admin.spotifiuby.com.ar',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GrupoX-FIUBA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spotifiuby. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false
      }]
    ],
};

module.exports = config;
