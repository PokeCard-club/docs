import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PokeCard.club',
  description: 'PokeCard.club documents',
  lang: 'ja',
  base: '/',
  head: [['link', { rel: 'icon', href: '/images/logo-mark.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',
    siteTitle: false,

    nav: [
      { text: 'Home', link: 'https://poke-card.club', target: '_blank' },
      { text: 'あそびかた', link: '/guides/index' },
      { text: 'リリースノート', link: '/release/index' },
      { text: 'プライバシーポリシー', link: '/privacy-policy' },
      { text: '利用規約', link: '/terms-of-service' },
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'あそびかた',
          items: [{ text: '準備中', link: '/guides/index' }],
        },
      ],
      '/release/': [
        {
          text: 'リリースノート',
          items: [
            {
              text: '23/11/07（0.1.0-beta）',
              link: 'release/23-11-07',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/QtraJTTQ6D' },
      { icon: 'x', link: 'https://twitter.com/PokeCard_club' },
    ],

    footer: {
      copyright: 'Development by PokeCard.club',
    },
  },
})
