import { memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities.entities/Article';
import { Text, TextSize, VStack } from 'shared/ui';
import {
    useArticleRecommendationListQuery,
} from '../../api/articleRecomendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const {
        className,
    } = props;

    const mods: Mods = {};

    const { data: articles, isLoading, error } = useArticleRecommendationListQuery();

    const { t } = useTranslation('article');

    if (error) {
        return null;
    }

    return (
        <VStack max gap={16}>
            <Text title={t('Рекоммендации')} size={TextSize.L} />
            <ArticleList
                className={classNames('', mods, [className])}
                target="_blank"
                articles={articles}
                error={error}
                isLoading={isLoading}
            />
        </VStack>
    );
});
