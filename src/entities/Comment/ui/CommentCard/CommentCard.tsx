import { FC, memo } from 'react';

import { classNames, Mods } from '@/shared/lib';
import {
    AppLink, Avatar, HStack, Skeleton, Text, VStack,
} from '@/shared/ui';
import { getProfileRoute } from '@/shared/config';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

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
                <VStack gap="4" className={classNames(cls.commentCard, mods, [className])}>
                    <HStack gap="8">
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
                    </HStack>
                    <Skeleton height={50} className={cls.text} />
                </VStack>
            );
        }

        return (
            <VStack
                data-testid="CommentCard"
                gap="4"
                className={classNames(cls.commentCard, mods, [className])}
            >
                <AppLink to={getProfileRoute(user.id)}>
                    <HStack gap="8">
                        {user.avatar
                            ? (
                                <Avatar
                                    src={user.avatar}
                                    size={30}
                                />
                            )
                            : <div className={cls.avatarMock} />}
                        <Text title={user.username} />
                    </HStack>
                </AppLink>
                <Text text={text} className={cls.text} />
            </VStack>
        );
    },
);
