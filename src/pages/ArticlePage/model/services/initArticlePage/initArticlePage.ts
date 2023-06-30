import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entities.entities/Article';
import { getArticlesInited } from '../../selectors/getArticles';
import { articlePageAction } from '../../slice/atriclePageSlice';
import {
    fetchArticleList,
} from '../fetchArticleList/fetchArticleList';

export const initArticlePage = createAsyncThunk<void, ArticlesView, ThunkConfig<string>>(
    'void/initArticlePage',
    async (view, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;
        const inited = getArticlesInited(getState());

        if (!inited) {
            dispatch(articlePageAction.initState(view));
            dispatch(fetchArticleList({}));
        }
    },
);
