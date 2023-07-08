import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleSortType, ArticleType } from 'entities.entities/Article';
import { SortOrder } from 'shared/types';
import { getArticleSort } from 'features/ArticleSort/model/selectors/getArticleSort';
import { addQueryParams } from 'shared/lib';
import { getArticlesLimit } from '../../selectors/getArticles';

interface FetchArticleListProps {
    page?: number;
    sort?: ArticleSortType;
    order?: SortOrder;
    search?: string;
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'ArticlePage/fetchArticleList',
    async (props, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;
        const { page = 1 } = props;
        const sortArticle = getArticleSort(getState());

        const limit = getArticlesLimit(getState());

        try {
            addQueryParams({
                ...sortArticle,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sortArticle?.sort || 'createdAt',
                    _order: sortArticle?.order || 'asc',
                    type_like:
                        sortArticle?.type === ArticleType.ALL
                            ? undefined
                            : sortArticle?.type,
                    q: sortArticle?.search || '',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
