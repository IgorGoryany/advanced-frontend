import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { ForbiddenPage } from './ForbiddenPage';

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
} as Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
