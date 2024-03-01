import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { ListBox, ListBoxItem } from './ListBox';

const people: ListBoxItem<string>[] = [
    { value: '1', content: 'Durward Reynolds', disabled: false },
    { value: '2', content: 'Kenton Towne', disabled: false },
    { value: '3', content: 'Therese Wunsch', disabled: false },
    { value: '4', content: 'Benedict Kessler', disabled: true },
    { value: '5', content: 'Katelyn Rohan', disabled: false },
];

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    args: {
        items: people,
    },
} as Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const LightBottomRight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const LightBottomLeft: Story = {
    args: {
        direction: 'bottom-left',
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const LightTopLeft: Story = {
    args: {
        direction: 'top-left',
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const LightTopRight: Story = {
    args: {
        direction: 'top-right',
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
