import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    server: {
      port: 5000,
    },
    plugins: [
      svelte({
        preprocess: preprocess({
          postcss: true,
          sourceMap: !isProduction,
        }),
        hot: !isProduction,
      })
    ],
    rollupdedupe: ['svelte'],
  }
});
