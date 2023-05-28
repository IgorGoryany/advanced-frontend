import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} as Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
export const Light: Story = {
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
