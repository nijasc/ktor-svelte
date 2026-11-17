import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit({
            adapter: adapter({ fallback: '200.html', precompress: true }),
            prerender: {
                handleHttpError: ({ path, message }) => {
                    if (!path.startsWith('/admin')) throw new Error(message);
                }
            }
        })
    ],
    server: { hmr: { clientPort: 5173, protocol: 'ws' } }
});
