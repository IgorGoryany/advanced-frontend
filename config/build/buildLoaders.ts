import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildСssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    const cssLoader = buildCssLoader(isDev);
    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
