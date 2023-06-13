import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { Avatar, Skeleton, Text } from 'shared/ui';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    isLoading?: boolean;
    comment: Comment;
}

export const CommentCard: FC<CommentCardProps> = memo(
    (props: CommentCardProps) => {
        const {
            className,
            isLoading,
            comment: { user, text },
        } = props;

        const mods: Mods = {};

        if (isLoading) {
            return (
                <div className={classNames(cls.commentCard, mods, [className])}>
                    <div className={cls.commentHeader}>
                        <Skeleton
                            className={cls.avatar}
                            height={30}
                            width={30}
                            border="50%"
                        />
                        <Skeleton
                            height={18}
                            width={70}
                            border="5px"
                        />
                    </div>
                    <Skeleton height={50} className={cls.text} />
                </div>
            );
        }

        return (
            <div className={classNames(cls.commentCard, mods, [className])}>
                <div className={cls.commentHeader}>
                    {user.avatar
                        ? (
                            <Avatar
                                className={cls.avatar}
                                src={user.avatar}
                                size={30}
                            />
                        )
                        : <div className={cls.avatarMock} />}
                    <Text title={user.username} />
                </div>
                <Text text={text} className={cls.text} />
            </div>
        );
    },
);
