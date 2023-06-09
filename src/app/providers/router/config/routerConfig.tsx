import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps, routePaths } from 'shared/config';

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
