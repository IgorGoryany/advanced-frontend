import type { Meta, StoryObj } from '@storybook/react';

// @ts-ignore
import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { Notification } from '@/entities/Notification';

import { NotificationList } from './NotificationList';

const notification: Notification = {
    userId: '1',
    id: '1',
    title: 'Уведомление',
    description: 'Hello Storybook',
};

const meta = {
    title: 'features/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification, title: 'Уведомление 1' },
                    { ...notification, title: 'Уведомление 2', id: '2' },
                    { ...notification, title: 'Уведомление 3', id: '3' },
                    { ...notification, title: 'Уведомление 4', id: '4' },
                ],
            },
        ],
    },
} as Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
