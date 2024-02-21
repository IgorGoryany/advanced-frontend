import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        articleRecommendationList: build.query<Article[], void>({
            query: () => ({
                url: '/articles',
                params: {
                    _limit: 4,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useArticleRecommendationListQuery } = recommendationApi;
