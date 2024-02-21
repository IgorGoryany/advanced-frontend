import {
    FC, memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch, useInitialEffect,
} from '@/shared/lib';
import { ArticleList, ArticlesView } from '@/entities/Article';
import { ARTICLE_VIEW_KEY } from '@/shared/const/localStorage';
import { PageLayout } from '@/widgets/PageLayout';
import { ArticleFilters } from '@/features/ArticleSort';
import {
    fetchArticleList,
} from '../../model/services/fetchArticleList/fetchArticleList';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesError,
    getArticlesIsLoading, getArticlesView,
} from '../../model/selectors/getArticles';

import {
    articlePageAction,
    articlePageReducer,
    getArticles,
} from '../../model/slice/atriclePageSlice';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);

    const onViewClick = useCallback((newView: ArticlesView) => {
        localStorage.setItem(ARTICLE_VIEW_KEY, newView);
        dispatch(articlePageAction.setView(newView));
    }, [dispatch]);

    const onChangeSort = useCallback(() => {
        dispatch(fetchArticleList({
            replace: true,
        }));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        const initialView = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticlesView;
        dispatch(initArticlePage(initialView));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageLayout
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlePage, mods, [className])}
            >
                <ArticleFilters
                    view={view}
                    onViewClick={onViewClick}
                    onChangeSort={onChangeSort}
                />
                <ArticleList
                    view={view}
                    error={error}
                    isLoading={isLoading}
                    articles={articles}
                />
            </PageLayout>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlePage);
