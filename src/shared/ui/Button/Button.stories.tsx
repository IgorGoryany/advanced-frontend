import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OutlinedLight: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
