import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../../lib/theme/ThemeContext/ThemeContext';
import { StoreDecorator } from '../../config/Storybook/StoreDecorator';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator';
import { Text } from '../Text/Text';

import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: <Text text="someText" title="someTitle" />,
    },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
