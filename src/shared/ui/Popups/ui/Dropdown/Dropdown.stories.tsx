import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Button, ButtonTheme } from '../../Button/Button';
import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    args: {
        trigger: <Button theme={ButtonTheme.OUTLINED}>Open</Button>,
        items: [
            {
                content: 'Content 1',
            },
            {
                content: 'Content 2',
            },
            {
                content: 'Content 3',
            },
        ],
    },
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
