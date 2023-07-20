import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticlesIsLoading,
    getArticlesError,
    getArticlesView,
    getArticlesLimit,
    getArticlesPage,
    getArticlesHasMore,
    getArticlesInited,
} from './getArticles';

describe('getArticleDetailsComments', () => {
    test('should return article isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesIsLoading(state as StateSchema)).toBe(true);
    });
    test(
        'should work with empty state and return false',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesIsLoading(state as StateSchema)).toBe(false);
        },
    );
    test('should return article error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
            },
        };
        expect(getArticlesError(state as StateSchema)).toBe('abd');
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesError(state as StateSchema)).toBe(undefined);
        },
    );
    test('should return article view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
                view: 'BIG',
            },
        };
        expect(getArticlesView(state as StateSchema)).toBe('BIG');
    });
    test(
        'should work with empty state and return SMALL',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesView(state as StateSchema)).toBe('SMALL');
        },
    );
    test('should return article limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
                view: 'BIG',
                limit: 4,
            },
        };
        expect(getArticlesLimit(state as StateSchema)).toBe(4);
    });
    test(
        'should work with empty state and return SMALL',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesLimit(state as StateSchema)).toBe(9);
        },
    );
    test('should return article page', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
                view: 'BIG',
                page: 5,
            },
        };
        expect(getArticlesPage(state as StateSchema)).toBe(5);
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesPage(state as StateSchema)).toBe(1);
        },
    );
    test('should return article has more', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
                view: 'BIG',
                hasMore: false,
            },
        };
        expect(getArticlesHasMore(state as StateSchema)).toBe(false);
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesHasMore(state as StateSchema)).toBe(undefined);
        },
    );
    test('should return article inited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'abd',
                view: 'BIG',
                hasMore: false,
                inited: true,
            },
        };
        expect(getArticlesInited(state as StateSchema)).toBe(true);
    });
    test(
        'should work with empty state and return true',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticlesInited(state as StateSchema)).toBe(false);
        },
    );
});
