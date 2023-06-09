import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../../shared/lib';
import { ThemeDecorator } from '../../../shared/config';
import { LangSwitcher } from './LangSwitcher';

const meta = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
} as Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
