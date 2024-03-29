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

export const parameters = {
    fetchMock: {
        // When the story is reloaded (or you navigate to a new
        // story, this addon will be reset and a list of
        // previous mock matches will be sent to the browser’s
        // console if "debug" is true.
        debug: true,

        // Do any additional configuration of fetch-mock, e.g.
        // setting fetchMock.config or calling other fetch-mock
        // API methods. This function is given the fetchMock
        // instance as its only parameter and is called after
        // mocks are added but before catchAllMocks are added.
        // useFetchMock: (fetchMock: any) => {
        //     fetchMock.config.overwriteRoutes = false;
        // },

        // After each story’s `mocks` are added, these catch-all
        // mocks are added.
        // catchAllMocks: [
        //     { matcher: { url: 'path:/endpoint1' }, response: 200 },
        //     { matcher: { url: 'path:/endpoint2' }, response: 200 },
        // ],

        // A simple list of URLs to ensure that calls to
        // `fetch( [url] )` don’t go to the network. The mocked
        // fetch response will use HTTP status 404 to make it
        // easy to determine one of the catchAllURLs was matched.
        // These mocks are added after any catchAllMocks.
        // catchAllURLs: [
        //     // This is equivalent to the mock object:
        //     // {
        //     //   matcher: { url: 'begin:http://example.com/' },
        //     //   response: { status: 404 },
        //     // }
        //     'https://testapi.ru',
        // ],
    },
};

export default preview;
