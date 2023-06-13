import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo(
    (props: CommentListProps) => {
        const {
            className,
            comments,
            isLoading,
        } = props;

        const mods: Mods = {};

        const { t } = useTranslation();
        return (
            <div className={classNames(cls.commentList, mods, [className])}>
                {comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            className={cls.comment}
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('Комментарии не найдены')} />}
            </div>
        );
    },
);
