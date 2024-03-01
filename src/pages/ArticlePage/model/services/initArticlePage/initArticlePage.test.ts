import { TestAsyncThunk } from '@/shared/lib/testing';

import {
    fetchArticleList,
} from '../fetchArticleList/fetchArticleList';

import {
    initArticlePage,
} from './initArticlePage';

jest.mock('../fetchArticleList/fetchArticleList');
describe('initArticlePage', () => {
    test('success  void', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                inited: false,
            },
        });

        await thunk.callThunk('BIG');

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({});
    });

    test('not success ', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                inited: true,
            },
        });

        await thunk.callThunk('BIG');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
