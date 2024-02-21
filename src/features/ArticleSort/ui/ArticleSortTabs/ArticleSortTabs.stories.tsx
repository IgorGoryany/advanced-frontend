import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { ArticleSortTabs } from './ArticleSortTabs';

const meta = {
    title: 'features/ArticleSortTabs',
    component: ArticleSortTabs,
    tags: ['autodocs'],
} as Meta<typeof ArticleSortTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
