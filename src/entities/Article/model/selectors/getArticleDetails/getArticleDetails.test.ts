import { StateSchema } from '@/shared/config';
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData,
} from './getArticleDetails';

describe('getArticleDetails.test', () => {
    test('should return articleDetailsData', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                articleDetailsData: {
                    type: [],
                    blocks: [],
                    views: 123,
                    subtitle: 'asd',
                    title: 'dasd',
                    img: 'dasdasd',
                    createdAt: '23.12.35',
                    id: 1,
                },
            },
        };
        expect(getArticleDetailsData(state as StateSchema))
            .toEqual({
                type: [],
                blocks: [],
                views: 123,
                subtitle: 'asd',
                title: 'dasd',
                img: 'dasdasd',
                createdAt: '23.12.35',
                id: 1,
            });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsData(state as StateSchema))
            .toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'dasdas',
            },
        };
        expect(getArticleDetailsError(state as StateSchema))
            .toBe('dasdas');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsError(state as StateSchema))
            .toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toBe(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(false);
    });
});
