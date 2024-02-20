import { memo } from 'react';
import { VStack } from 'shared/ui';
import { NotificationItem, NotificationLoader } from 'entities.entities/Notification';
import { classNames } from 'shared/lib';
import { useNotification } from '../../api/notificationApi';

interface NotificationListProps {
  className?: string
}
export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;

    const { data, isLoading, error } = useNotification(null, { pollingInterval: 15_000 });

    const classes = classNames('', {}, [className]);

    if (isLoading) {
        return (
            <VStack gap="16" className={classes}>
                <NotificationLoader />
                <NotificationLoader />
                <NotificationLoader />
            </VStack>
        );
    }

    return (
        <VStack gap="16" className={classes}>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...notification}
                />
            ))}
        </VStack>
    );
});
