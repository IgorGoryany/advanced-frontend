import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeDecorator } from 'shared/config';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores deserunt inventore laborum libero magnam possimus quas quidem similique voluptatibus!',
        isOpen: true,

    },
} as Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK, 'app')],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT, 'app')],
};
