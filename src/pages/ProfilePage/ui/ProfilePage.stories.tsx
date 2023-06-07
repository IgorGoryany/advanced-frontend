import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import img from 'shared/assets/test/storybook.png';
import { Country } from 'entities.entities/Country';
import { Currency } from 'entities.entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        profile: {
            readonly: true,
            formData: {
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
    })],
} as Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
