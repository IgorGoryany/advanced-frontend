import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from 'entities.entities/Article';
import {
    fetchArticleRecommendation,
} from './fetchArticleRecommendation';

const article: DeepPartial<Article>[] = [];
describe('fetchArticleRecommendation', () => {
    test('success get Article[]', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendation);
        thunk.$api.get.mockReturnValue(Promise.resolve({ data: article }));
        const result = await thunk.callThunk();

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('not success get Article[]', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendation);
        thunk.$api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
