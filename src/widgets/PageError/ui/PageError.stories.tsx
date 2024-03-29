import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';

import { PageError } from './PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
} as Meta<typeof PageError>;

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
