import { memo } from 'react';
import { HStack, Skeleton, VStack } from '@/shared/ui';

interface ArticleDetailsLoaderProps {
    title: string
    subTitle: string
    text: string
    avatar: string
}

export const ArticleDetailsLoader = memo(
    ({
        title, subTitle, text, avatar,
    }: ArticleDetailsLoaderProps) => (
        <VStack gap="32" max>
            <HStack max justify="center">
                <Skeleton
                    className={avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
            </HStack>
            <Skeleton className={title} width={650} height={32} />
            <Skeleton className={subTitle} width={400} height={24} />
            <Skeleton className={text} width="100%" height={130} />
            <Skeleton className={text} width="100%" height={150} />
        </VStack>
    ),
);
