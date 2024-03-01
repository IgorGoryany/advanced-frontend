import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { articlesForTest } from '@/shared/const/testing';

import ArticlePage from './ArticlePage';

const ar = articlesForTest;

// @ts-ignore
const meta = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        articlesPage: {
            ids: [1, 2, 3, 4, 5, 6, 7, 8],
        },

    })],
} as Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
