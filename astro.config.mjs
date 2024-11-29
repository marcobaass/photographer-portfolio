import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});