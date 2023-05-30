import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeDecorator } from 'shared/config';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
