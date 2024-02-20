import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/lib';
import { NotificationLoader } from './NotificationLoader';

const meta = {
    title: 'entities/NotificationLoader',
    component: NotificationLoader,
    tags: ['autodocs'],
    args: {
        readonly: true,
        data: {},
    },
} as Meta<typeof NotificationLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
};
