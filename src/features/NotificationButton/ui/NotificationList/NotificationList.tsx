import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Text, TextSize, TextTheme, VStack,
} from '@/shared/ui';
import { NotificationItem, NotificationLoader } from '@/entities/Notification';
import { classNames } from '@/shared/lib';

import { useNotification } from '../../api/notificationApi';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string
}
export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading, error } = useNotification(null, { pollingInterval: 15_000 });

    const classes = classNames(cls.notificationList, {}, [className]);

    if (error) {
        return (
            <Text
                title={t('Не удалось загрузить уведомления')}
                text={t('Попробуйте перезагрузить страницу')}
                size={TextSize.S}
                theme={TextTheme.ERROR}
            />
        );
    }

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
