import { StateSchema } from 'app/providers/StoreProvider';
import HomePageIcon from 'shared/assets/icons/HomePageIcon.svg';
import { routePaths } from 'shared/config';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/ProfilePageIcon.svg';
import ArticlePageIcon from 'shared/assets/icons/ArticlePageIcon.svg';
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
                path: `${routePaths.profile}1`,
                text: 'Профиль',
                authOnly: true,
            },
            {
                Icon: ArticlePageIcon,
                path: routePaths.articles,
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
                    path: routePaths.main,
                    text: 'Главная',
                },
                {
                    Icon: AboutPageIcon,
                    path: routePaths.about,
                    text: 'О сайте',
                }]);
        },
    );
});
