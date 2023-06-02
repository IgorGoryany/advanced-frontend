import { Suspense } from 'react';
import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '../../src/shared/lib';
import '../../src/app/styles/index.scss';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';

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
                <Suspense fallback="">
                    <ThemeProvider>
                        <div className={`app ${Theme.LIGHT}`}>
                            <Story />
                        </div>
                    </ThemeProvider>
                </Suspense>
            </MemoryRouter>
        ),
    ],
};

export default preview;
