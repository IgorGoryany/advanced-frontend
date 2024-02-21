import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize, VStack } from '@/shared/ui';
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
        <VStack max>
            <Text title={t('Рекомендации')} size={TextSize.L} />
            <ArticleList
                className={classNames('', mods, [className])}
                target="_blank"
                articles={articles}
                error={error}
                isLoading={isLoading}
                view="SMALL"
                isRecommendationList
            />
        </VStack>
    );
});
