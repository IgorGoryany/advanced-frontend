import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '../../config';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} as Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
