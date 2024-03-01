import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {},
    })],
} as Meta<typeof LoginForm>;

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
            isLoading: false,
            error: 'неправильный логин или пароль',
        },
    })],
};
export const LightError: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            isLoading: false,
            error: 'неправильный логин или пароль',
        },
    })],
};

export const DarkLoading: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
};
export const LightLoading: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
};
