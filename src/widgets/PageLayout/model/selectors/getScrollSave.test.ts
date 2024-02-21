import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollSaveScroll, getScrollSaveScrollByPath } from './getScrollSave';

describe('scrollSave', () => {
    test('should return scroll', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: {
                    article: 500,
                },
            },
        };
        expect(getScrollSaveScroll(state as StateSchema))
            .toEqual({ article: 500 });
    });
    test('should return scroll value', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: {
                    article: 500,
                },
            },
        };
        expect(getScrollSaveScrollByPath(state as StateSchema, 'article'))
            .toEqual(500);
    });
    test('should work with empty state and return 0', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: {},
            },
        };
        expect(getScrollSaveScrollByPath(state as StateSchema, 'article'))
            .toEqual(0);
    });
});
