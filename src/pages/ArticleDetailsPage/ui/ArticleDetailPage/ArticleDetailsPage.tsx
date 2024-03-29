import {
    FC, memo, useCallback,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    classNames,
    DynamicModuleLoader,
    Mods,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from '@/shared/lib';
import { ArticleDetails } from '@/entities/Article';
import {
    Button, ButtonTheme, Text, TextTheme,
    VStack,
} from '@/shared/ui';
import { getArticlesRoute } from '@/shared/config';
import { PageLayout } from '@/widgets/PageLayout';
import {
    ArticleRecommendationList,
} from '@/features/ArticleRecommendationList';

import { ArticleRating } from '@/features/ArticleRating';

import {
    ArticleDetailsComments,
} from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slice';
import {
    fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getArticlesRoute());
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    }, [id]);

    if (__PROJECT__ === 'storybook') {
        return (
            <PageLayout
                data-testid="ArticleDetailsPage"
                className={classNames(cls.articleDetailPage, mods, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINED}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id="1" />
                <ArticleDetailsComments />
            </PageLayout>
        );
    }

    if (__PROJECT__ === 'jest') {
        return (
            <PageLayout
                data-testid="ArticleDetailsPage"
                className={classNames(cls.articleDetailPage, mods, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINED}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id="1" />
                <ArticleDetailsComments />
            </PageLayout>
        );
    }

    if (!id) {
        return (
            <PageLayout
                data-testid="ArticleDetailsPage"
                className={classNames(cls.articleDetailPage, mods, [className])}
            >
                <Text
                    title={t('Не удалось загрузить статью')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                />
            </PageLayout>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageLayout
                data-testid="ArticleDetailsPage"
                saveScroll={false}
                className={classNames(cls.articleDetailPage, mods, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINED}>
                    {t('Назад к списку')}
                </Button>
                <VStack gap="32" max>
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationList />
                    <ArticleDetailsComments />
                </VStack>
            </PageLayout>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
