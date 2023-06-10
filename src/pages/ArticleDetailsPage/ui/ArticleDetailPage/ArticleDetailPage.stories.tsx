import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import ArticleDetailPage from './ArticleDetailsPage';

const meta = {
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    tags: ['autodocs'],
} as Meta<typeof ArticleDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
