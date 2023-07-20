import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities.entities/Comment';
import { getUserAuthData } from 'entities.entities/User';
import {
    getArticleDetailsData,
} from 'entities.entities/Article/model/selectors/getArticleDetails/getArticleDetails';
import {
    fetchCommentByArticleId,
} from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.$api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchCommentByArticleId(`${article.id}`));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
