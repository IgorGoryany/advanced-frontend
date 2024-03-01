import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    args: {
        comments: [
            {
                id: 1,
                user: { id: 1, username: 'Mjbaron' },
                text: 'some comment 1',
            },
            {
                id: 2,
                user: { id: 1, username: 'Mjbaron' },
                text: 'some comment 2',
            },
            {
                id: 3,
                user: { id: 1, username: 'Mjbaron' },
                text: 'some comment 3',
            },
        ],
    },
} as Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
export const DarkLoading: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
        isLoading: true,
    },
};
export const LightLoading: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {
        isLoading: true,
    },
};
