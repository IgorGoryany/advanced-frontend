import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} as Meta<typeof Sidebar>;

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
