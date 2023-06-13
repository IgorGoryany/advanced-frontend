import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities.entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentByArticleId,
} from '../services/fetchCommentByArticleId/fetchCommentByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComment = commentsAdapter.getSelectors<StateSchema>(
    (state) => state?.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCommentByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
export const { actions: articleDetailsCommentAction } = articleDetailsCommentSlice;
