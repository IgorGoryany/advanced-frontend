import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
// @ts-ignore
import withMock from 'storybook-addon-mock';
import { Article, ArticleType } from 'entities.entities/Article';
import { ArticleRecommendationList } from './ArticleRecommendationList';

const article: Article = {
    id: 1,
    type: [],
    views: 1231,
    img: 'asdasd',
    title: '123',
    blocks: [],
    user: { id: 1, username: 'asda' },
    createdAt: '123',
    subtitle: 'asdasd',
};

const meta = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    tags: ['autodocs'],
    decorators: [withMock, StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=4`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: 1 },
                    { ...article, id: 2 },
                    { ...article, id: 3 },
                    { ...article, id: 4 },
                    { ...article, id: 5 },
                    { ...article, id: 6 },
                ],
            },
        ],
    },
} as Meta<typeof ArticleRecommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
