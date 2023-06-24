import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesView } from 'entities.entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

const articleAdapter = createEntityAdapter<Article>({
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
            state.limit = action.payload === 'BIG' ? 4 : 10;
            state.inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                articleAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: articlePageAction } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
