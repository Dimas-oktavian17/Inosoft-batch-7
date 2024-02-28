import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': '/resources/js/components',
            'views': '/resources/js/views',
            // alias is'nt working when autocompletion
            'stores': '/resources/js/store',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "bootstrap/scss/bootstrap";`,
            },
        },
    }
})
