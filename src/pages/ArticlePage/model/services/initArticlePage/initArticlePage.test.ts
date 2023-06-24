import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    initArticlePage,
} from './initArticlePage';
import {
    fetchArticleList,
} from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');
describe('initArticlePage', () => {
    test('success  void', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                inited: false,
            },
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({
            page: 1,
        });
    });

    test('not success ', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                inited: true,
            },
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
