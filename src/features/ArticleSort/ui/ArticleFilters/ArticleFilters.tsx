import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
    Card, HStack, Input, TabItem,
} from '@/shared/ui';
import {
    DynamicModuleLoader,
    ReducersList,
    useAppDispatch,
    useDebounce,
    useInitialEffect,
} from '@/shared/lib';
import { ArticlesView, ArticleType } from '@/entities/Article';

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
                <div className={className}>
                    <HStack align="center" justify="between">
                        <ArticleSortSelectors onChangeSort={onChangeSort} />
                        <ArticleViewSelector view={view} onViewClick={onViewClick} />
                    </HStack>
                    <Card className={cls.search}>
                        <Input
                            data-testid="ArticleSort.input"
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
