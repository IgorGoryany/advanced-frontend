import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} as Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: undefined,
        },
    })],
};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        user: {
            authData: undefined,
        },
    })],
};

export const DarkAuth: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: {},
        },
    })],
};

export const LightAuth: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        user: {
            authData: {},
        },
    })],
};
