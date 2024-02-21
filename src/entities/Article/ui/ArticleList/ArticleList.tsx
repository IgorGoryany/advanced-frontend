import {
    FC, HTMLAttributeAnchorTarget, memo, useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
    HStack, Text, TextAlign, TextSize,
} from '@/shared/ui';
import { classNames, Mods, useDebounce } from '@/shared/lib';
import { PAGE_ID } from '@/widgets/PageLayout';
import { ArticleListItemLoader } from '../ArticleListItem/ArticleListItemLoader';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles?: Article[]
    isLoading?: boolean
    error?: FetchBaseQueryError | SerializedError | string
    view?: ArticlesView
    target?: HTMLAttributeAnchorTarget
    isRecommendationList?: boolean
}

const getLoadersCount = (view: ArticlesView) => (view === 'SMALL' ? 12 : 4);

const listItemCount = (view: ArticlesView, articlesLength?: number, isLoading?: boolean): number => {
    const loadersCount = getLoadersCount(view);
    if (articlesLength && isLoading) {
        return articlesLength + loadersCount;
    }
    if (!articlesLength && isLoading) {
        return loadersCount;
    }
    return articlesLength || 0;
};
const cardLoaders = (view: ArticlesView) => new Array(view === 'SMALL' ? 12 : 4)
    .fill(0)
    .map((item, index) => {
        const keys = index;
        return <ArticleListItemLoader view="SMALL" key={keys} position="relative" />;
    });

export const ArticleList: FC<ArticleListProps> = memo(
    (props: ArticleListProps) => {
        const {
            className,
            articles,
            isLoading,
            view = 'BIG',
            error,
            target,
            isRecommendationList,
        } = props;

        const mods: Mods = {};

        const listRef = useRef<HTMLDivElement | null>(null);

        const [width, setWidth] = useState(listRef.current?.offsetWidth);

        const { t } = useTranslation('article');

        const rowVirtualizer = useVirtualizer({
            count: listItemCount(view, articles?.length, isLoading),
            estimateSize: () => 696 + 30,
            overscan: 1,
            scrollMargin: 0,
            getScrollElement: () => document.getElementById(PAGE_ID) as HTMLDivElement,
            // debug: true,
        });

        const resizeHandler = useDebounce((e: UIEvent) => {
            const element = e.target as HTMLDivElement;
            setWidth(element.clientWidth);
        }, 300);

        const renderArticle = useCallback((article: Article) => (
            <ArticleListItem
                target={target}
                article={article}
                key={article.id}
                view={view}
                position="relative"
            />
        ), [target, view]);

        useEffect(() => {
            const element = listRef.current;
            element?.addEventListener('resize', resizeHandler);
            return () => {
                element?.removeEventListener('resize', resizeHandler);
            };
        }, [resizeHandler]);

        if (error) {
            return (
                <div className={classNames(cls.articleList, mods, [className])}>
                    <Text
                        align={TextAlign.CENTER}
                        title={t('Не удалось загрузить посты')}
                        text={t('попробуйте перезагрузить страницу')}
                    />
                </div>
            );
        }
        if (!isLoading && !articles?.length) {
            return (
                <Text
                    className={cls.notFound}
                    size={TextSize.L}
                    title={t('Статьи не найдены')}
                    align={TextAlign.CENTER}
                />
            );
        }

        if (isRecommendationList) {
            return (
                <HStack gap={16}>
                    {articles?.map(renderArticle)}
                </HStack>
            );
        }

        if (view === 'SMALL') {
            return (
                <HStack wrap gap={32}>
                    {articles?.map(renderArticle)}
                    {isLoading && cardLoaders(view)}
                </HStack>
            );
        }

        return (
            <div
                style={{
                    height: rowVirtualizer.getTotalSize(),
                    width: '100%',
                }}
                className={classNames(cls.articleList, mods, [cls.listWrapper, className, cls[view]])}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    if (virtualRow.index + 1 > (articles?.length || 0)) {
                        return (
                            <ArticleListItemLoader
                                view={view}
                                key={virtualRow.key}
                                translateY={virtualRow.start}
                            />
                        );
                    }
                    return (
                        <ArticleListItem
                            target={target}
                            article={articles?.[virtualRow.index]}
                            key={articles?.[virtualRow.index]?.id}
                            view={view}
                            translateY={virtualRow.start}
                        />
                    );
                })}
            </div>
        );
    },
);
