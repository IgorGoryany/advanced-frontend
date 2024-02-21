import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';

export const getArticleSortSort = (state: StateSchema) => state.articleSort?.sort || 'createdAt';
export const getArticleSortOrder = (state: StateSchema) => state.articleSort?.order || 'asc';
export const getArticleSortSearch = (state: StateSchema) => state.articleSort?.search ?? '';
export const getArticleSortType = (state: StateSchema) => state.articleSort?.type ?? ArticleType.ALL;
export const getArticleSort = (state: StateSchema) => state.articleSort;
