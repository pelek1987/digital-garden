import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/digital-garden',
  title: "My Digital Garden",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    logo: '/assets/img/logo-symbol.svg',
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Start here', link: '/' }
        ]
      },
      {
        text: 'Core',
        items: [
          { text: 'Direction', link: '/Core/Direction.md' },
          { text: 'Learning System', link: '/Core/Learning System.md' },
          { text: 'Process', link: '/Core/Process.md' },
          { text: 'Knowing thyself', link: '/Core/Knowing thyself.md' },
          { text: 'Values', link: '/Core/Values.md' },
        ]
      },
    ]
  }
})