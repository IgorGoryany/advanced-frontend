import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, VStack } from '@/shared/ui';

import { CommentCard } from '../CommentCard/CommentCard';
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

        const { t } = useTranslation();
        return (
            <VStack
                data-testid="CommentList"
                gap="16"
                max
                className={className}
            >
                {comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('Комментарии не найдены')} />}
            </VStack>
        );
    },
);
