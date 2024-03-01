import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';

import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
