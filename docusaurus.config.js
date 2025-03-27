// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial', // 站点名称
  tagline: 'Learn step by step',
  favicon: 'img/docusaurus.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'your-github-org', // 你的 GitHub 组织或用户名
  projectName: 'your-repo-name', // 你的 GitHub 仓库名称

  onBrokenLinks: 'throw',// 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-github-org/your-repo-name/edit/main/',
          routeBasePath: '/', // 让文档成为首页
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/YUX.png',
    navbar: {
      logo: {
        alt: 'Tutorial Logo',
        src: 'img/YUX.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/your-github-org/your-repo-name', // 这里换成你的GitHub地址
          label: 'MyPage',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-github-org/your-repo-name', // 这里也换成你的GitHub地址
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
