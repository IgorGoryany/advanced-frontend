import type { Meta, StoryObj } from '@storybook/react';
// @ts-ignore
import withMock from 'storybook-addon-mock';
import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import ArticleRating from './ArticleRating';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: 1,
            },
        },
    })],
    args: {
        articleId: '1',
    },
} as Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkWithRate: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-rating?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    { rate: 3 },
                ],
            },
        ],
    },
};
export const LightWithoutRate: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-rating?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};

export const LightLoading: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        storybookLoading: true,
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-rating?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};

export const DarkLoading: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        storybookLoading: true,
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-rating?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
