import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/lib';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification',
    component: NotificationItem,
    tags: ['autodocs'],
    args: {
        readonly: true,
        data: {},
    },
} as Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
};
