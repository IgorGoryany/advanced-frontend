import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '../../src/shared/lib';

import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            </MemoryRouter>
        ),
    ],
};

export default preview;
