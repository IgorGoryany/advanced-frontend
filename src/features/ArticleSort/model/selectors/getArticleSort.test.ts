import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities.entities/Article';
import {
    getArticleSortOrder, getArticleSortSearch, getArticleSortSort, getArticleSortType,
} from './getArticleSort';

describe('articleSort', () => {
    test('should return articleSort sort', () => {
        const state: DeepPartial<StateSchema> = {
            articleSort: {
                sort: 'views',
            },
        };
        expect(getArticleSortSort(state as StateSchema))
            .toBe('views');
    });
    test(
        'should work with empty state and return false',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleSortSort(state as StateSchema))
                .toBe('createdAt');
        },
    );
    test('should return articleSort order', () => {
        const state: DeepPartial<StateSchema> = {
            articleSort: {
                order: 'desc',
            },
        };
        expect(getArticleSortOrder(state as StateSchema))
            .toBe('desc');
    });
    test(
        'should work with empty state and return asc',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleSortOrder(state as StateSchema))
                .toBe('asc');
        },
    );
    test('should return articleSort search', () => {
        const state: DeepPartial<StateSchema> = {
            articleSort: {
                search: 'adasdasd',
            },
        };
        expect(getArticleSortSearch(state as StateSchema))
            .toBe('adasdasd');
    });
    test(
        'should work with empty state and return empty string',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleSortSearch(state as StateSchema))
                .toBe('');
        },
    );
    test('should return articleSort type', () => {
        const state: DeepPartial<StateSchema> = {
            articleSort: {
                type: ArticleType.POLITICS,
            },
        };
        expect(getArticleSortType(state as StateSchema))
            .toBe('POLITICS');
    });
    test(
        'should work with empty state and return ALL',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleSortType(state as StateSchema))
                .toBe('ALL');
        },
    );
});
