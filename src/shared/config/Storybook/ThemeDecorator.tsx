import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/lib';

// eslint-disable-next-line func-names
export const ThemeDecorator = (theme: Theme, id?: string) => function (Story: StoryFn) {
    return (
        <div className={`app ${theme}`} id={id || ''}>
            <Story />
        </div>
    );
};
