import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleRatingSchema } from '../model/types/ArticleRatingSchema';

interface ArticleRatingParams {
    userId: string;
    articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<ArticleRatingSchema[], ArticleRatingParams>({
            query: ({ articleId, userId }) => ({
                url: '/article-rating',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        setArticleRating: build.mutation<ArticleRatingSchema, Omit<ArticleRatingSchema, 'id'>>({
            query: (params) => ({
                url: '/article-rating',
                method: 'POST',
                body: params,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetArticleRatingQuery: useGetArticleRating,
    useSetArticleRatingMutation: useSetArticleRating,
} = articleRatingApi;
