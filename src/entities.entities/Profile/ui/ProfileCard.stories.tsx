import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/lib';
import img from 'shared/assets/test/storybook.jpg';
import { Country } from 'entities.entities/Country';
import { Currency } from 'entities.entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    args: {
        readonly: true,
        data: {
            first: 'Игорь',
            lastname: 'Горяный',
            age: 22,
            city: 'Москва',
            country: Country.Armenia,
            currency: Currency.EUR,
            username: 'Mjbaron',
            avatar: img,
        },
    },
} as Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Error: Story = {
    args: {
        error: 'asdasd',
    },
};
