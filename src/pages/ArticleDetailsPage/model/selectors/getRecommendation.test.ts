import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleRecommendationIsLoading, getArticleRecommendationError } from './getRecommendation';

describe('articleDetailsRecommendation', () => {
    test('should return articleDetailsRecommendation isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendation: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleRecommendationIsLoading(state as StateSchema))
            .toBe(true);
    });
    test(
        'should work with empty state and return false',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleRecommendationIsLoading(state as StateSchema))
                .toBe(false);
        },
    );
    test('should return articleDetailsRecommendation error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendation: {
                    error: 'abd',
                },
            },
        };
        expect(getArticleRecommendationError(state as StateSchema))
            .toBe('abd');
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleRecommendationError(state as StateSchema))
                .toBe(undefined);
        },
    );
});
