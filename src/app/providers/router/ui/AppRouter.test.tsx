import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/testing';
import { getAboutRoute } from '@/shared/config';

import { AppRouter } from './AppRouter';

describe('AppRouter.test.tsx', () => {
    test('render About', async () => {
        componentRender(<AppRouter />, {
            route: getAboutRoute(),
        });
        const page = await screen.findByTestId('about-page-data-testid');

        expect(page).toBeInTheDocument();
    });
});
