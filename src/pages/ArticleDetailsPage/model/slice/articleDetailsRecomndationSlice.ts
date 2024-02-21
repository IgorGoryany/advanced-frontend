import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';
import {
    fetchArticleRecommendation,
} from '../services/fetchArticleRecommendation/fetchArticleRecommendation';

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => (
        state?.articleDetailsPage?.recommendation || recommendationAdapter.getInitialState()
    ),
);

export const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsRecommendation',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendation.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const {
    actions: articleDetailsRecommendationAction,
} = articleDetailsRecommendationSlice;
export const {
    reducer: articleDetailsRecommendationReducer,
} = articleDetailsRecommendationSlice;
