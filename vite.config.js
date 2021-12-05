import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import preprocess from 'svelte-preprocess'

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';

    return {
        server: {
            port: 5000,
        },
        plugins: [
            svelte({
                preprocess: preprocess({
                    postcss: true
                }),
                hot: !isProduction,
            })
        ],
    }
});
