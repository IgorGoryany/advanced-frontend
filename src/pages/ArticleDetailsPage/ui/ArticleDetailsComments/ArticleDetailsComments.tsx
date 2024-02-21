import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods, useAppDispatch } from '@/shared/lib';
import { Text, VStack } from '@/shared/ui';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComment } from '../../model/slice/articleDetailsCommentSlice';
import {
    getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/getComments';

interface ArticleDetailsCommentsProps {
    className?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
    (props: ArticleDetailsCommentsProps) => {
        const {
            className,
        } = props;

        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComment.selectAll);
        const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
        const mods: Mods = {};
        const onSendComment = useCallback((text: string) => {
            dispatch(addCommentForArticle(text));
        }, [dispatch]);

        const { t } = useTranslation('article');
        return (
            <VStack max gap={16} className={classNames('', mods, [className])}>
                <Text title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
