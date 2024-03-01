import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: { id: 1 },
        },
    })],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: false,
        },
    })],
};
