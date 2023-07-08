import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../../shared/lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../../shared/config/Storybook/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'shared/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
} as Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
