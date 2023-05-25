import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
];
