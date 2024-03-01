import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortType, ArticleType } from '@/entities/Article';

import { articleSortAction } from '../../slice/articleSortSlice';
import { ArticleSortSchema } from '../../types/ArticleSortSchema';

export const initArticleSort = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'void/initArticleSort',
    async (searchParams, thunkAPI) => {
        const {
            dispatch,
        } = thunkAPI;

        const searchURl: ArticleSortSchema = {
            order: searchParams.get('order') as SortOrder,
            search: searchParams.get('search') as string,
            sort: searchParams.get('sort') as ArticleSortType,
            type: searchParams.get('type') as ArticleType,
        };
        dispatch(articleSortAction.initArticleSort(searchURl));
    },
);
