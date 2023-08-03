import {
    FC, memo, useCallback, useMemo,
} from 'react';
import {
    classNames,
    DynamicModuleLoader,
    Mods,
    ReducersList,
    useAppDispatch,
    useDebounce,
    useInitialEffect,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Card, Input, TabItem, Tabs,
} from 'shared/ui';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticlesView, ArticleType } from 'entities.entities/Article';
import {
    ArticleViewSelector,
} from '../ArticleViewSelector/ArticleViewSelector';
import {
    initArticleSort,
} from '../../model/services/initArticleSort/initArticleSort';
import { articleSortAction, articleSortReducer } from '../../model/slice/articleSortSlice';
import { getArticleSortSearch, getArticleSortType } from '../../model/selectors/getArticleSort';
import { ArticleSortSelectors } from '../ArticleSortSelectors/ArticleSortSelectors';
import { ArticleSortTabs } from '../ArticleSortTabs/ArticleSortTabs';
import cls from './ArticleFilters.module.scss';

const reducers: ReducersList = {
    articleSort: articleSortReducer,
};

interface ArticleFiltersProps {
    className?: string;
    view: ArticlesView
    onViewClick?: (view: ArticlesView) => void
    onChangeSort: () => void
}

const ArticleFilters: FC<ArticleFiltersProps> = memo(
    (props: ArticleFiltersProps) => {
        const {
            className,
            view,
            onViewClick,
            onChangeSort,
        } = props;
        const { t } = useTranslation('article');
        const mods: Mods = {};
        const dispatch = useAppDispatch();
        const search = useSelector(getArticleSortSearch);
        const type = useSelector(getArticleSortType);

        const debouncedOnChangeSort = useDebounce(onChangeSort, 500);

        const onChangeSearch = useCallback((search: string) => {
            dispatch(articleSortAction.setSearch(search));
            debouncedOnChangeSort();
        }, [debouncedOnChangeSort, dispatch]);

        const [searchParams] = useSearchParams();

        const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
            dispatch(articleSortAction.setType(tab.value));
            onChangeSort();
        }, [dispatch, onChangeSort]);

        useInitialEffect(() => {
            dispatch(initArticleSort(searchParams));
        });

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.articlePageFilters, mods, [className])}>
                    <div className={cls.sortWrapper}>
                        <ArticleSortSelectors onChangeSort={onChangeSort} />
                        <ArticleViewSelector view={view} onViewClick={onViewClick} />
                    </div>
                    <Card className={cls.search}>
                        <Input
                            value={search}
                            onChange={onChangeSearch}
                            placeholder={t('Поиск')}
                        />
                    </Card>
                    <ArticleSortTabs
                        className={cls.tabs}
                        type={type}
                        onTabClick={onTabClick}
                    />
                </div>
            </DynamicModuleLoader>
        );
    },
);
export default ArticleFilters;
