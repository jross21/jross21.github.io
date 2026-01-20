// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jross21.github.io',

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  redirects: {
    '/writing': '/ideas',
    '/thinking': '/ideas',
    '/thinking/*': '/ideas/*',
    '/work': '/projects',
    '/implementation': '/projects',
    '/implementation/*': '/projects/*',
    '/services': '/',
    '/tools': '/',
  }
});
