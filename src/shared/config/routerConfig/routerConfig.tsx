import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Pick<RouteProps, 'path'| 'element'>[] = [
    {
        path: routePaths.main,
        element: <MainPage />,
    },
    {
        path: routePaths.about,
        element: <AboutPage />,
    },
    {
        path: routePaths.notFound,
        element: <NotFoundPage />,
    },
];
