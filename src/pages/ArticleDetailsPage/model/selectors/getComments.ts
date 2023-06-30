import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => (
    state.articleDetailsPage?.comment?.isLoading || false
);
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsPage?.comment?.error;
