import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { Drawer } from './Drawer';

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    args: {
        isOpen: true,
    },
} as Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
