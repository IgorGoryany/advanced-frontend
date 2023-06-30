import { FC, memo, useCallback } from 'react';
import {
    classNames,
    DynamicModuleLoader,
    Mods,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/lib';
import { ArticleDetails, ArticleList } from 'entities.entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, Text, TextTheme,
} from 'shared/ui';
import { CommentList } from 'entities.entities/Comment';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { routePaths } from 'shared/config';
import { PageLayout } from 'widgets/PageLayout';
import { articleDetailsPageReducer } from '../../model/slice';
import {
    getArticleRecommendationError,
    getArticleRecommendationIsLoading,
} from '../../model/selectors/getRecommendation';
import {
    fetchArticleRecommendation,
} from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation';
import {
    fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getComments';
import {
    getArticleRecommendation,
} from '../../model/slice/articleDetailsRecomndationSlice';
import {
    getArticleComment,
} from '../../model/slice/articleDetailsCommentSlice';
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
    const comments = useSelector(getArticleComment.selectAll);
    const recommendation = useSelector(getArticleRecommendation.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const recommendationIsLoading = useSelector(getArticleRecommendationIsLoading);
    const recommendationError = useSelector(getArticleRecommendationError);
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(routePaths.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticleRecommendation());
    }, [id]);

    if (__PROJECT__ === 'storybook') {
        return (
            <PageLayout className={classNames(cls.articleDetailPage, mods, [className])}>
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINED}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id="1" />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
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
                <Text title={t('Рекоммендации')} className={cls.commentTitle} />
                <ArticleList
                    target="_blank"
                    articles={recommendation}
                    className={cls.recommendationList}
                    error={recommendationError}
                    isLoading={recommendationIsLoading}
                />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </PageLayout>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
