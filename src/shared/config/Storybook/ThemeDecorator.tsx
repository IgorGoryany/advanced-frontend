import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/lib';

// eslint-disable-next-line func-names
export const ThemeDecorator = (theme: Theme) => function (Story: StoryFn) {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
