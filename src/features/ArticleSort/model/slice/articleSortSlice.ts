import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSortType, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { ArticleSortSchema } from '../types/ArticleSortSchema';

const initialState: ArticleSortSchema = {
    order: 'asc',
    search: '',
    sort: 'createdAt',
    type: ArticleType.ALL,
};

export const articleSortSlice = createSlice({
    name: 'articleSort',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<ArticleSortType>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initArticleSort: (state, action: PayloadAction<ArticleSortSchema>) => {
            Object.entries(action.payload).forEach(([name, value]) => {
                if (value) {
                    // @ts-ignore
                    state[name] = value;
                }
            });
        },
    },

});

export const { actions: articleSortAction } = articleSortSlice;
export const { reducer: articleSortReducer } = articleSortSlice;
