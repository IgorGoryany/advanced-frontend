import { TestAsyncThunk } from '@/shared/lib/testing';
import { Comment } from '@/entities/Comment';

import {
    addCommentForArticle,
} from './addCommentForArticle';

const CommentState: DeepPartial<Comment> = {
    text: 'asdasd',
    user: { username: 'asdas', id: 1, avatar: 'asdasd' },
    id: 1,
};
describe('addCommentForArticle', () => {
    test('success post Comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: {} }, articleDetails: { articleDetailsData: {} },
        });
        thunk.$api.post.mockReturnValue(Promise.resolve({ data: CommentState }));
        const result = await thunk.callThunk('sadasd');

        expect(thunk.$api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(CommentState);
    });

    test('not success post Comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: {} }, articleDetails: { articleDetailsData: {} },
        });
        thunk.$api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('asdasdas');

        expect(thunk.$api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
    test('not success post Comment with empty state', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.$api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('asdasdas');

        expect(thunk.$api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
