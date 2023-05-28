import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/lib';
import { LangSwitcher } from './LangSwitcher';

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
} as Meta<typeof LangSwitcher>;

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
