import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} as Meta<typeof Navbar>;

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
