import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) => (
    state.articleDetailsPage?.recommendation?.isLoading || false
);
export const getArticleRecommendationError = (state: StateSchema) => (
    state.articleDetailsPage?.recommendation?.error
);
