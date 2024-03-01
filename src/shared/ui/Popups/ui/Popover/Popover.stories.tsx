import type { Meta, StoryObj } from '@storybook/react';

import NotificationIcon from '@/shared/assets/icons/Notification.svg';
import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';

import { Icon } from '../../../Icon/Icon';

import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    tags: ['autodocs'],
    args: {
        trigger: <Icon Svg={NotificationIcon} />,
        children: (
            <div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
            </div>
        ),
    },
} as Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
