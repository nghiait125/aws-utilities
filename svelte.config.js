import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: path.resolve('./src/components'),
      $modules: path.resolve('./src/modules'),
      $stores: path.resolve('./src/stores'),
    },
  },
};

export default config;
