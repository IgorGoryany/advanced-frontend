import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './comments';

describe('getArticleDetailsComments.test', () => {
    test('should return loginState', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
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
            articleDetailsComments: {
                error: 'abd',
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
