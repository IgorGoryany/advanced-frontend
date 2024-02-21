import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    args: {
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
} as Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowJustifyCenter: Story = {
    args: {
        justify: 'center',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowJustifyEnd: Story = {
    args: {
        justify: 'end',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowJustifyBetween: Story = {
    args: {
        justify: 'between',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowGapS: Story = {
    args: {
        gap: '4',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowGapM: Story = {
    args: {
        gap: '8',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowGapL: Story = {
    args: {
        gap: '16',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const RowGapXL: Story = {
    args: {
        gap: '32',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnAlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnGapS: Story = {
    args: {
        gap: '4',
        direction: 'column',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnGapM: Story = {
    args: {
        gap: '8',
        direction: 'column',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnGapL: Story = {
    args: {
        gap: '16',
        direction: 'column',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ColumnGapXL: Story = {
    args: {
        gap: '32',
        direction: 'column',
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
