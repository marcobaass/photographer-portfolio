import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: 'https://www.baass-fotografie.de',
  trailingSlash: 'always',
  output: 'static',
  server: {
    host: true
  },
});
