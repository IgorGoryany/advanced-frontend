import {
    FC, HTMLAttributeAnchorTarget, memo, useCallback,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextSize } from 'shared/ui';
import { ArticleListItemLoader } from '../ArticleListItem/ArticleListItemLoader';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean
    error?: string
    view?: ArticlesView
    target?: HTMLAttributeAnchorTarget
}

const cardLoaders = (view: ArticlesView) => new Array(view === 'SMALL' ? 12 : 4)
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
            error,
            target,
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation('article');

        const renderArticle = useCallback((article: Article) => (
            <ArticleListItem
                target={target}
                article={article}
                key={article.id}
                view={view}
            />
        ), [target, view]);

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
                    size={TextSize.SIZE_L}
                    title={t('Статьи не найдены')}
                    align={TextAlign.CENTER}
                />
            );
        }

        return (
            <div className={classNames(cls.articleList, mods, [className, cls[view]])}>
                {articles?.map(renderArticle)}
                {isLoading && cardLoaders(view)}
            </div>
        );
    },
);
