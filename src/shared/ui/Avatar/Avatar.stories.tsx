import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../config';
import { Theme } from '../../lib';
import { Avatar } from './Avatar';
import img from '../../assets/test/storybook.png';

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
    args: {
        size: 50,
    },
};
export const DarkSmall: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightSmall: Story = {
    args: {
        size: 50,
    },
};
