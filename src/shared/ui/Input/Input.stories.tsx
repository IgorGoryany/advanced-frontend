import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../config';
import { Theme } from '../../lib';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        placeholder: 'enter text',
    },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {};
