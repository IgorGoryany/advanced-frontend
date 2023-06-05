import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    //! last
    NOT_FOUND = 'notFound',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

    //! last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: AppRoutesProps[] = [
    {
        path: routePaths.main,
        element: <MainPage />,
    },
    {
        path: routePaths.about,
        element: <AboutPage />,
    },
    {
        path: routePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },

    //! last
    {
        path: routePaths.notFound,
        element: <NotFoundPage />,
    },
];
