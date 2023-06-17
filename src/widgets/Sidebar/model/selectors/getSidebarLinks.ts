import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities.entities/User';
import HomePageIcon from 'shared/assets/icons/HomePageIcon.svg';
import { routePaths } from 'shared/config';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/ProfilePageIcon.svg';
import ArticlePageIcon from 'shared/assets/icons/ArticlePageIcon.svg';
import { sidebarLinkType } from '../types/sidebar';

export const getSidebarLinks = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarLinksList: sidebarLinkType[] = [
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
        ];

        if (userData) {
            sidebarLinksList.push(
                {
                    Icon: ProfilePageIcon,
                    path: `${routePaths.profile}/${userData.id}`,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    Icon: ArticlePageIcon,
                    path: routePaths.articles,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarLinksList;
    },
);
