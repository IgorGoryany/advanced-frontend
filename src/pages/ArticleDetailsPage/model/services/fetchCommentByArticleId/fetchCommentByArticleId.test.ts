import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchCommentByArticleId,
} from './fetchCommentByArticleId';

const Comment: DeepPartial<Comment> = {};
describe('fetchCommentByArticleId', () => {
    test('success get Comment', async () => {
        const thunk = new TestAsyncThunk(fetchCommentByArticleId);
        thunk.$api.get.mockReturnValue(Promise.resolve({ data: Comment }));
        const result = await thunk.callThunk('1');

        expect(thunk.$api.get)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('fulfilled');
        expect(result.payload)
            .toEqual(Comment);
    });

    test('not success get Comment', async () => {
        const thunk = new TestAsyncThunk(fetchCommentByArticleId);
        thunk.$api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.$api.get)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('rejected');
    });
});
