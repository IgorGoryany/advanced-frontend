import { FC, memo, useCallback } from 'react';
import {
    classNames,
    DynamicModuleLoader,
    Mods,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/lib';
import { ArticleDetails } from 'entities.entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, Text, TextTheme,
} from 'shared/ui';
import { routePaths } from 'shared/config';
import { PageLayout } from 'widgets/PageLayout';
import {
    ArticleRecommendationList,
} from 'features/ArticleRecomendationList';
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
        navigate(routePaths.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    }, [id]);

    if (__PROJECT__ === 'storybook') {
        return (
            <PageLayout className={classNames(cls.articleDetailPage, mods, [className])}>
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
            <PageLayout className={classNames(cls.articleDetailPage, mods, [className])}>
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
                saveScroll={false}
                className={classNames(cls.articleDetailPage, mods, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINED}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <ArticleRecommendationList />
                <ArticleDetailsComments />
            </PageLayout>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
