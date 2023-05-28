import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
