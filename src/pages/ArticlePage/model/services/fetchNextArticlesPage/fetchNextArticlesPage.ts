import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesHasMore, getArticlesIsLoading, getArticlesPage,
} from '../../selectors/getArticles';
import { articlePageAction } from '../../slice/atriclePageSlice';
import {
    fetchArticleList,
} from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPage(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageAction.setPage(page + 1));
            dispatch(fetchArticleList({
                page: page + 1,
            }));
        }
    },
);
