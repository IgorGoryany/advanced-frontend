import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { articlesForTest } from '@/shared/const/testing';

import { ArticleList } from './ArticleList';

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],

} as Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSmall: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'SMALL',
        articles: articlesForTest,
    },
};
export const LightSmall: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'SMALL',
        articles: articlesForTest,
    },
};

export const DarkBig: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'BIG',
        articles: articlesForTest,
    },
};
export const LightBig: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'BIG',
        articles: articlesForTest,
    },
};

export const DarkLoadingSmall: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'SMALL',
        isLoading: true,
        articles: [],
    },
};
export const LightLoadingSmall: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'SMALL',
        isLoading: true,
        articles: [],
    },
};

export const DarkLoadingBig: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        view: 'BIG',
        isLoading: true,
        articles: [],
    },
};
export const LightLoadingBig: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        view: 'BIG',
        isLoading: true,
        articles: [],
    },
};
