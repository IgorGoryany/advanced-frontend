// @ts-ignore
import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                memo: true,
                exportType: 'default',
            },
            include: '**/*.svg',
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
