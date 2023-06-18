import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedLight: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedDisabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedBackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundThemeLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const InvertedBackgroundThemeLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquaredSizeMLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquaredSizeLLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquaredSizeXLLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquaredSizeMDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquaredSizeLDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquaredSizeXLDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        children: '>',
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedSizeM: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
