import { FC, memo, useCallback } from 'react';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch, useInitialEffect,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticlesView } from 'entities.entities/Article';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ARTICLE_VIEW_KEY } from 'shared/const/localStorage';
import {
    getArticlesError,
    getArticlesIsLoading, getArticlesView,
} from '../model/selectors/getArticles';
import {
    fetchArticleList,
} from '../model/services/fetchArticleList/fetchArticleList';
import {
    articlePageAction,
    articlePageReducer,
    getArticles,
} from '../model/slice/atriclePageSlice';
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
    const { t } = useTranslation('article');
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

    useInitialEffect(() => {
        const initialView = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticlesView;
        dispatch(articlePageAction.initView(initialView));
        dispatch(fetchArticleList());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articlePage, mods, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewClick} />
                <ArticleList
                    view={view}
                    error={error}
                    isLoading={isLoading}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlePage);
