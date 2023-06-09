import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from '../../config';

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
