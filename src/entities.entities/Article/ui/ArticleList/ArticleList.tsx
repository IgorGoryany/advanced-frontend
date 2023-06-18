import { FC, memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { TextAlign, Text } from 'shared/ui';
import {
    ArticleListItemLoader,
} from '../ArticleListItem/ArticleListItemLoader';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const cardLoaders = (view: ArticleView) => new Array(view === 'SMALL' ? 12 : 4)
    .fill(0)
    .map((item, index) => {
        const keys = index;
        return <ArticleListItemLoader view={view} key={keys} />;
    });

export const ArticleList: FC<ArticleListProps> = memo(
    (props: ArticleListProps) => {
        const {
            className,
            articles,
            isLoading,
            view = 'SMALL',
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation('article');

        const renderArticle = useCallback((article: Article) => (
            <ArticleListItem
                article={article}
                key={article.id}
                view={view}
            />
        ), [view]);

        if (isLoading) {
            return (
                <div className={classNames(cls.articleList, mods, [className, cls[view]])}>
                    {cardLoaders(view)}
                </div>
            );
        }
        return (
            <div className={classNames(cls.articleList, mods, [className, cls[view]])}>
                {articles.length ? (
                    articles?.map(renderArticle)
                ) : <Text title={t('Статьи не найдены')} align={TextAlign.CENTER} />}
            </div>
        );
    },
);
