import React from 'react';
import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    getAboutRoute,
    getAdminPanelRoute,
    getArticleDetailsRoute,
    getArticlesRoute,
    getForbiddenRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/config';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export const routerConfig: AppRoutesProps[] = [
    {
        path: getMainRoute(),
        element: <MainPage />,
    },
    {
        path: getAboutRoute(),
        element: <AboutPage />,
    },
    {
        path: getProfileRoute(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: getArticlesRoute(),
        element: <ArticlePage />,
        authOnly: true,
    },
    {
        path: getArticleDetailsRoute(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: getAdminPanelRoute(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: ['ADMIN'],
    },

    //! last
    {
        path: getForbiddenRoute(),
        element: <ForbiddenPage />,
        authOnly: true,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
