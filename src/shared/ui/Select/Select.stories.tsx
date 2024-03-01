import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        label: 'choose',
        option: [
            { content: 'hello', value: 'hello' },
            { content: 'world', value: 'world' },
        ],
    },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
