import { memo } from 'react';
import { Skeleton } from 'shared/ui';

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
        <>
            <Skeleton
                className={avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={title} width={650} height={32} />
            <Skeleton className={subTitle} width={400} height={24} />
            <Skeleton className={text} width="100%" height={130} />
            <Skeleton className={text} width="100%" height={150} />
        </>
    ),
);
