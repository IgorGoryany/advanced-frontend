import React from 'react';
import HomePageIcon from 'shared/assets/icons/HomePageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/ProfilePageIcon.svg';
import ArticlePageIcon from 'shared/assets/icons/ArticlePageIcon.svg';
import { routePaths } from 'shared/config';

interface sidebarLinkType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarLinksList: sidebarLinkType[] = [
    {
        Icon: HomePageIcon,
        path: routePaths.main,
        text: 'Главная',
    },
    {
        Icon: AboutPageIcon,
        path: routePaths.about,
        text: 'О сайте',
    },
    {
        Icon: ProfilePageIcon,
        path: routePaths.profile,
        text: 'Профиль',
        authOnly: true,
    },
    {
        Icon: ArticlePageIcon,
        path: routePaths.articles,
        text: 'Статьи',
        authOnly: true,
    },
];
