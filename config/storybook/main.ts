import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildСssLoader';
import { buildFileLoader } from '../build/loaders/buildFileLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    webpackFinal: async (config: Configuration) => {
        const paths: Pick<BuildPaths, 'src'> = {
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config.resolve.modules.push(paths.src);
        config.resolve.extensions.push('ts', 'tsx');
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(<string>rule.test)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push(buildSvgLoader());
        config.module.rules.push(buildCssLoader(true));
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
