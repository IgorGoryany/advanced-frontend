import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    args: {

        comment: {
            id: 1,
            user: { id: 1, username: 'Mjbaron' },
            text: 'some comment',
        },
    },
} as Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {

    },
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {

    },
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
