import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticlesView } from '@/entities/Article';

import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

export const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articleAdapter.getInitialState(),
);
export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'SMALL',
        hasMore: true,
        page: 1,
        inited: false,
        limit: 9,
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticlesView>) => {
            state.view = action.payload;
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },

        initState: (state, action:PayloadAction<ArticlesView>) => {
            state.view = action.payload;
            state.limit = action.payload === 'BIG' ? 4 : 12;
            state.inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    state.page = 1;
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length >= state.limit;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: articlePageAction } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
