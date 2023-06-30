import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { ArticleSortSelectors } from './ArticleSortSelectors';

const meta = {
    title: 'features/ArticleSortSelectors',
    component: ArticleSortSelectors,
    tags: ['autodocs'],
} as Meta<typeof ArticleSortSelectors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
