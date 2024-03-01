import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Card, Skeleton, VStack } from '@/shared/ui';

import cls from './NotificationLoader.module.scss';

interface NotificationProps {
  className?: string;
}
export const NotificationLoader = memo((props: NotificationProps) => {
    const {
        className,
    } = props;

    return (
        <Card
            theme="outlined"
            className={classNames(cls.NotificationLoader, {}, [className])}
        >
            <VStack gap="8">
                <Skeleton height={32} width="100%" border="5px" />
                <Skeleton height={50} width="100%" border="5px" />
            </VStack>
        </Card>
    );
});
