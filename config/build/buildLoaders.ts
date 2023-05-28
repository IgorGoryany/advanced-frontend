import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildСssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    const cssLoader = buildCssLoader(isDev);
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
