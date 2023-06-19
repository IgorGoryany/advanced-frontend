import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesIsLoading, getArticlesError, getArticlesView } from './getArticles';

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
    test('should return loginState', () => {
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
});
