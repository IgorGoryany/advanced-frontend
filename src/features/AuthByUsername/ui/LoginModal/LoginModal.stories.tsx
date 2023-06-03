import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: false,
        },
    })],
    args: {
        isOpen: true,
    },
} as Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: false,
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

export const DarkError: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: false,
            error: 'неправильный логин или пароль',
        },
    })],
};
export const LightError: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: false,
            error: 'неправильный логин или пароль',
        },
    })],
};

export const DarkLoading: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: true,
        },
    })],
};
export const LightLoading: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: '',
            password: '',
            isLoading: true,
        },
    })],
};
