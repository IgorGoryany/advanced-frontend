import path from 'path';

import webpack, { Configuration, RuleSetRule } from 'webpack';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildСssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        // 'storybook-addon-fetch-mock',
    ],
    webpackFinal: async (config: Configuration) => {
        const paths: Pick<BuildPaths, 'src'> = {
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('ts', 'tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };
        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(<string>rule.test)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config!.plugins!.push(new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }));
        config!.module!.rules!.push(buildSvgLoader());
        config!.module!.rules!.push(buildCssLoader(true));
        return config;
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
