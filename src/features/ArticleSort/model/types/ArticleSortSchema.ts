import { SortOrder } from '@/shared/types';
import { ArticleSortType, ArticleType } from '@/entities/Article';

export interface ArticleSortSchema {
    order: SortOrder;
    sort: ArticleSortType;
    search: string;
    type: ArticleType;
}
