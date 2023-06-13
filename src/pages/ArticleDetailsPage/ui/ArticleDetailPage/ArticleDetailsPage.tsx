import { FC, memo } from 'react';
import {
    classNames,
    DynamicModuleLoader,
    Mods,
    ReducersList,
    useAppDispatch,
    useInitialEffect,
} from 'shared/lib';
import { ArticleDetails } from 'entities.entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui';
import { CommentList } from 'entities.entities/Comment';
import { useSelector } from 'react-redux';
import {
    fetchCommentByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    articleDetailsCommentReducer, getArticleComment,
} from '../../model/slice/articleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('article');

    const comments = useSelector(getArticleComment.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    // const commentsError = useSelector(getArticleDetailsCommentsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    }, [id]);

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailPage, mods, [className])}>
                <Text
                    title={t('Не удалось загрузить статью')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    if (__PROJECT__ === 'storybook') {
        return (
            <div className={classNames(cls.articleDetailPage, mods, [className])}>
                <ArticleDetails id="1" />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <CommentList />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailPage, mods, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
