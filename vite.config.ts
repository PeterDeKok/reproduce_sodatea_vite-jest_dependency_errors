import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Reproduction',
            fileName: (format) => `reproduction.${format}.js`,
        },
        outDir: 'lib',
    },
    // Add this to workaround issue(s)
    // optimizeDeps: {
    //     exclude: [ 'jest' ],
    // },
});
