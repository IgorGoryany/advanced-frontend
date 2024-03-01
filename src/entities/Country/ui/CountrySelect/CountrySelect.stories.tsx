import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config';
import { Theme } from '@/shared/lib';

import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
} as Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
