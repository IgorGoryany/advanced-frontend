import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {},
        aliasFields: ['browser'],
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        preferAbsolute: true,
    };
}
