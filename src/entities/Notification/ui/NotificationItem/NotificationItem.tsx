import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { AppLink, Card, Text } from '@/shared/ui';

import cls from './NotificationItem.module.scss';

import type { Notification } from '../../model/types';

interface NotificationProps extends Notification {
  className?: string;
}
export const NotificationItem = memo((props: NotificationProps) => {
    const {
        className, description, title, href,
    } = props;

    const classes = classNames(cls.notificationItem, {}, [className]);

    const content = (
        <Card
            theme="outlined"
            className={classes}
        >
            <Text title={title} text={description} titleWrap="nowrap" />
        </Card>
    );

    if (href) {
        return (
            <AppLink to={href} className={classes}>
                {content}
            </AppLink>
        );
    }

    return content;
});
