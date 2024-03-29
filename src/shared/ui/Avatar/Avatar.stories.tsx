import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';

import img from '../../assets/test/storybook.jpg';

import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: img,
    },
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
};
export const DarkSmall: Story = {
    args: {
        size: 50,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightSmall: Story = {
    args: {
        size: 50,
    },
};
