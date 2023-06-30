import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortType, ArticlesView } from 'entities.entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticlesView;

    inited: boolean;
}
