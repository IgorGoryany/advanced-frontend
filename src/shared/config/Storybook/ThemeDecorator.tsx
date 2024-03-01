import { StoryFn } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { ThemeProvider } from '@/app/providers/testing';

// eslint-disable-next-line func-names
export const ThemeDecorator = (theme: Theme) => function (Story: StoryFn) {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
