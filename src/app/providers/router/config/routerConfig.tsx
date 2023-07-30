import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps, routePaths } from 'shared/config';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';

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
        path: `${routePaths.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: routePaths.articles,
        element: <ArticlePage />,
        authOnly: true,
    },
    {
        path: `${routePaths.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: `${routePaths.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: `${routePaths.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: ['ADMIN'],
    },

    //! last
    {
        path: `${routePaths.forbidden}`,
        element: <ForbiddenPage />,
        authOnly: true,
    },
    {
        path: routePaths.notFound,
        element: <NotFoundPage />,
    },
];
