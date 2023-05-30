import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeDecorator } from 'shared/config';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.PRIMARY,
    },
};
export const InvertedPrimary: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const InvertedSecondary: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.INVERTED_SECONDARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedPrimaryDark: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const SecondaryDark: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedSecondaryDark: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.INVERTED_SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
