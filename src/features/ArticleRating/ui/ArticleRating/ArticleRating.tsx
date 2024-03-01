import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';

import { Skeleton } from '@/shared/ui';
import { useAuth } from '@/entities/User';

import {
    useGetArticleRating,
    useSetArticleRating,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
    /**
    * @deprecated Нужен для отображения загрузки в сторибуке
    * */
    storybookLoading?: boolean;
}

const ArticleRating: FC<ArticleRatingProps> = memo(
    (props: ArticleRatingProps) => {
        const {
            className,
            articleId,
            storybookLoading,
        } = props;
        const userId = useAuth()?.id.toString();

        const {
            data,
            isLoading: isLoadingGetData,
        } = useGetArticleRating({ userId: userId ?? '', articleId });

        const [setArticleRating, { error: setError, data: setData }] = useSetArticleRating();

        const { t } = useTranslation();

        const rate = data?.[0]?.rate;

        let title = rate || setData?.rate
            ? t('Спасибо за ваш отзыв')
            : t('Оцените статью');

        const handleSetStarRatting = useCallback((starNumber: number, feedback?: string) => {
            try {
                setArticleRating({
                    rate: starNumber,
                    feedback,
                    articleId,
                    userId: userId ?? '',
                });
            } catch (e) {
                console.log(e);
            }
        }, [articleId, setArticleRating, userId]);

        const onAccept = useCallback((starNumber: number, feedback?: string) => {
            handleSetStarRatting(starNumber, feedback);
        }, [handleSetStarRatting]);

        const onCancel = useCallback((starNumber: number) => {
            handleSetStarRatting(starNumber);
        }, [handleSetStarRatting]);

        const loader = <Skeleton width="100%" height={120} border="20px" />;

        if (storybookLoading && __PROJECT__ === 'storybook') {
            return loader;
        }

        if (isLoadingGetData) {
            return loader;
        }

        if (setError) title = t('Не удалось поставить оценку, попробуйте позже');

        return (
            <RatingCard
                title={title}
                selectedStars={rate || setData?.rate}
                FeedbackTitle={t('Оставьте отзыв о статье')}
                hasFeedback
                onAccept={onAccept}
                onCancel={onCancel}
                className={className}
            />
        );
    },
);

export default ArticleRating;
