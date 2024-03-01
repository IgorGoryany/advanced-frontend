import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';

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
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
