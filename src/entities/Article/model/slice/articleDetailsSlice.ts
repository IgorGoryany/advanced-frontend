import { createSlice } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types/article';
import {
    fetchArticleDetailsById,
} from '../service/fetchArticleDetailsById/fetchArticleDetailsById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    articleDetailsData: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailsById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleDetailsById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articleDetailsData = action.payload;
            })
            .addCase(fetchArticleDetailsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: articleDetailsAction } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
