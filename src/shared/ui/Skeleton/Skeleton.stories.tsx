import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { StoreDecorator } from '../../config/Storybook/StoreDecorator';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {
        width: '100%',
        height: '200px',
    },
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const DarkCircle: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const LightCircle: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
