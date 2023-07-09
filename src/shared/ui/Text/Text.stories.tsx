import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryLightSizeL: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
};

export const PrimaryDarkSizeL: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        size: TextSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorLight: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleLight: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextLight: Story = {
    args: {
        text: 'Text',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
