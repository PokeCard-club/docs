import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PokeCard.club',
  description: 'PokeCard.club documents',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: '遊び方',
        items: [{ text: 'Markdown Examples', link: '/guides/index' }],
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/QtraJTTQ6D' },
      { icon: 'x', link: 'https://twitter.com/PokeCard_club' },
    ],
  },
})
