import { StateSchema } from '@/app/providers/StoreProvider';
import HomePageIcon from '@/shared/assets/icons/HomePageIcon.svg';
import {
    getAboutRoute,
    getArticlesRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/config';
import AboutPageIcon from '@/shared/assets/icons/AboutPageIcon.svg';
import ProfilePageIcon from '@/shared/assets/icons/ProfilePageIcon.svg';
import ArticlePageIcon from '@/shared/assets/icons/ArticlePageIcon.svg';

import { getSidebarLinks } from './getSidebarLinks';

describe('getArticleDetailsComments.test', () => {
    test('should return loginState', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: { id: 1 },
            },
        };
        expect(getSidebarLinks(state as StateSchema)).toEqual([
            {
                Icon: HomePageIcon,
                path: getMainRoute(),
                text: 'Главная',
            },
            {
                Icon: AboutPageIcon,
                path: getAboutRoute(),
                text: 'О сайте',
            },
            {
                Icon: ProfilePageIcon,
                path: getProfileRoute(1),
                text: 'Профиль',
                authOnly: true,
            },
            {
                Icon: ArticlePageIcon,
                path: getArticlesRoute(),
                text: 'Статьи',
                authOnly: true,
            },
        ]);
    });
    test(
        'should work with empty state and return ',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getSidebarLinks(state as StateSchema)).toEqual([
                {
                    Icon: HomePageIcon,
                    path: getMainRoute(),
                    text: 'Главная',
                },
                {
                    Icon: AboutPageIcon,
                    path: getAboutRoute(),
                    text: 'О сайте',
                }]);
        },
    );
});
