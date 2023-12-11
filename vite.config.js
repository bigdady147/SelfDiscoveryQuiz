// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
//
// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });
import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'


import path from 'path';
export default defineConfig({
    plugins: [
        vue(
            {
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }
        ),
        laravel({
            input: [
                'resources/scss/index.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],

    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            }
        }
    },
    resolve: {
        dedupe: ['vue'],
        alias: {
            "@public": path.resolve(__dirname, "./public"),
            "~": path.resolve(__dirname, "./resources/js"),
            "@": path.resolve(__dirname, "./resources/js"),
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            'sass': path.resolve(__dirname, 'node_modules/sass'),
            '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
            '~vue-tour': path.resolve(__dirname, 'node_modules/vue-tour'),
            'axios': path.resolve(__dirname, 'node_modules/axios'),
            'moment': path.resolve(__dirname, 'node_modules/moment'),
            '~assets': path.resolve(__dirname, 'public'),
        }
    },
});
