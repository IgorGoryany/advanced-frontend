import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './getComments';

describe('getArticleDetailsComments.test', () => {
    test('should return loginState', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comment: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
    });
    test(
        'should work with empty state and return false',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
        },
    );
    test('should return loginState', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comment: {
                    error: 'abd',
                },
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toBe('abd');
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
        },
    );
});
