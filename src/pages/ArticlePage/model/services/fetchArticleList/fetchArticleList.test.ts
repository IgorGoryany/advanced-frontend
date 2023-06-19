import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from 'entities.entities/Article';
import { ArticleType } from 'entities.entities/Article/model/types/article';
import {
    fetchArticleList,
} from './fetchArticleList';

const article: DeepPartial<Article[]> = [
    {
        id: 1,
        img: 'asdasd',
        blocks: [
            { id: 1, title: 'asdasd', src: 'asdasd' },
            { id: 2, title: 'asdasd', src: 'asdasd' },
            { id: 3, title: 'asdasd', src: 'asdasd' },
        ],
        views: 23,
    },
    {
        id: 2,
        img: 'asd',
        blocks: [
            { id: 1, title: 'asdsd', src: 'asdasd' },
            { id: 2, title: 'asd2asd', src: 'asdasad' },
            { id: 3, title: 'asdasd', src: 'asddasd' },
        ],
        views: 40,
    },
];

describe('fetchArticleList', () => {
    test('success get Article[]', async () => {
        const thunk = new TestAsyncThunk(fetchArticleList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('not success get Article[]', async () => {
        const thunk = new TestAsyncThunk(fetchArticleList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});