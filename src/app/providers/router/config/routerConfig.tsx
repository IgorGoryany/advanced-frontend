import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps, routePaths } from 'shared/config';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

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

    //! last
    {
        path: routePaths.notFound,
        element: <NotFoundPage />,
    },
];
