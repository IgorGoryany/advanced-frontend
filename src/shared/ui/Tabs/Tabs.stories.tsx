import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    args: {
        tabs: [
            {
                value: 'value',
                content: 'content 1',
            },
            {
                value: 'value1',
                content: 'content 2',
            },
            {
                value: 'value2',
                content: 'content 3',
            },
            {
                value: 'value3',
                content: 'content 4',
            },
        ],
    },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
