import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} as Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
