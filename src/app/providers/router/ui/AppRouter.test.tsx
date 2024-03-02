import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/testing';
import {
    getAboutRoute,
    getAdminPanelRoute,
    getArticleDetailsRoute,
    getArticlesRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/config';

import { AppRouter } from './AppRouter';

describe('AppRouter.test.tsx', () => {
    describe('not auth', () => {
        test('render AboutPage', async () => {
            componentRender(<AppRouter />, {
                route: getAboutRoute(),
            });
            const page = await screen.findByTestId('AboutPage');

            expect(page).toBeInTheDocument();
        });
        test('render MainPage', async () => {
            componentRender(<AppRouter />, {
                route: getMainRoute(),
            });
            const page = await screen.findByTestId('MainPage');

            expect(page).toBeInTheDocument();
        });
        test('render NotFoundPage', async () => {
            componentRender(<AppRouter />, {
                route: '/asdasdsad',
            });
            const page = await screen.findByTestId('NotFoundPage');

            expect(page).toBeInTheDocument();
        });
        test('should redirect on MainPage', async () => {
            componentRender(<AppRouter />, {
                route: getArticlesRoute(),
            });
            const page = await screen.findByTestId('MainPage');

            expect(page).toBeInTheDocument();
        });
        test('should redirect on MainPage from ProfilePage', async () => {
            componentRender(<AppRouter />, {
                route: getProfileRoute('1'),
            });
            const page = await screen.findByTestId('MainPage');

            expect(page).toBeInTheDocument();
        });
    });
    describe('auth', () => {
        test('render ArticlePage', async () => {
            componentRender(<AppRouter />, {
                route: getArticlesRoute(),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: {},
                    },
                },
            });
            const page = await screen.findByTestId('ArticlePage');

            expect(page).toBeInTheDocument();
        });
        test('render ArticleDetailsPage', async () => {
            componentRender(<AppRouter />, {
                route: getArticleDetailsRoute('1'),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: {
                            id: 1,
                        },
                    },
                },
            });

            const page = await screen.findByTestId('ArticleDetailsPage');

            expect(page).toBeInTheDocument();
        });
        test('render ProfilePage', async () => {
            componentRender(<AppRouter />, {
                route: getProfileRoute('1'),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: {},
                    },
                },
            });
            const page = await screen.findByTestId('ProfilePage');

            expect(page).toBeInTheDocument();
        });
        test('render AdminPanelPage', async () => {
            componentRender(<AppRouter />, {
                route: getAdminPanelRoute(),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: {
                            roles: ['ADMIN'],
                        },
                    },
                },
            });
            const page = await screen.findByTestId('AdminPanelPage');

            expect(page).toBeInTheDocument();
        });
        test('render ForbiddenPage', async () => {
            componentRender(<AppRouter />, {
                route: getAdminPanelRoute(),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: {
                            roles: ['USER'],
                        },
                    },
                },
            });
            const page = await screen.findByTestId('ForbiddenPage');

            expect(page).toBeInTheDocument();
        });
    });
});
