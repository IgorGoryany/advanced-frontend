import { StateSchema } from '@/app/providers/StoreProvider';

import { getAddCommentFormText, getAddCommentFormError } from './getAddCommentForm';

describe('getArticleDetailsComments.test', () => {
    test('should return formText', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'sdadasd',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toBe('sdadasd');
    });
    test(
        'should work with empty state and return false',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getAddCommentFormText(state as StateSchema)).toEqual('');
        },
    );
    test('should return FormError', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'abd',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toBe('abd');
    });
    test(
        'should work with empty state and return undefined',
        () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
        },
    );
});
