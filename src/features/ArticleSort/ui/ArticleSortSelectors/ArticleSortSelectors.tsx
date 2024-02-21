import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames, Mods, useAppDispatch } from '@/shared/lib';
import { Select, SelectOption } from '@/shared/ui';
import { SortOrder } from '@/shared/types';
import { ArticleSortType } from '@/entities/Article';
import {
    getArticleSortOrder,
    getArticleSortSort,
} from '../../model/selectors/getArticleSort';
import { articleSortAction } from '../../model/slice/articleSortSlice';
import cls from './ArticleSortSelectors.module.scss';

interface ArticleSortSelectorsProps {
    className?: string;
    onChangeSort: () => void
}

export const ArticleSortSelectors: FC<ArticleSortSelectorsProps> = memo(
    (props: ArticleSortSelectorsProps) => {
        const {
            className,
            onChangeSort,
        } = props;
        const { t } = useTranslation('article');
        const mods: Mods = {};
        const dispatch = useAppDispatch();
        const sort = useSelector(getArticleSortSort);
        const order = useSelector(getArticleSortOrder);

        const onChangeOrder = useCallback((order: SortOrder) => {
            dispatch(articleSortAction.setOrder(order));
            onChangeSort();
        }, [dispatch, onChangeSort]);

        const onChangeSortHandle = useCallback((sort: ArticleSortType) => {
            dispatch(articleSortAction.setSort(sort));
            onChangeSort();
        }, [dispatch, onChangeSort]);

        const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
            {
                value: 'asc',
                content: t('По возрастанию'),
            },
            {
                value: 'desc',
                content: t('По убыванию'),
            },
        ]), [t]);

        const sortOptions = useMemo<SelectOption<ArticleSortType>[]>(() => ([
            {
                value: 'createdAt',
                content: t('дате'),
            },
            {
                value: 'title',
                content: t('заголовку'),
            },
            {
                value: 'views',
                content: t('просмотрам'),
            },
        ]), [t]);

        return (
            <div className={classNames(cls.articleSortSelectors, mods, [className])}>
                <Select<ArticleSortType>
                    label={t('Сортировать по')}
                    option={sortOptions}
                    value={sort}
                    onChange={onChangeSortHandle}
                />
                <Select<SortOrder>
                    value={order}
                    option={orderOptions}
                    onChange={onChangeOrder}
                />
            </div>
        );
    },
);
