import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from '@/entities/Article';

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
