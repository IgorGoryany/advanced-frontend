import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
} as Meta<typeof PageLoader>;

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
