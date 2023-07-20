import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchArticleDetailsById,
} from './fetchArticleDetailsById';
import { Article } from '../../types/article';

const article: DeepPartial<Article> = {
    blocks: [],
    img: 'dasda',
    createdAt: 'sads',
    title: 'sads',
    id: 1,
    subtitle: 'sads',
    type: [],
    views: 21,
};
describe('fetchArticleDetailsById', () => {
    test('success get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsById);
        thunk.$api.get.mockReturnValue(Promise.resolve({ data: article }));
        const result = await thunk.callThunk(`${article.id}`);

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('not success get Article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsById);
        thunk.$api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(`${article.id}`);

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
