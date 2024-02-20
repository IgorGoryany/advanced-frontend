import { memo } from 'react';
import { classNames } from 'shared/lib';
import { AppLink, Card, Text } from 'shared/ui';
import type { Notification } from '../../model/types';
import cls from './NotificationItem.module.scss';

interface NotificationProps extends Notification {
  className?: string;
}
export const NotificationItem = memo((props: NotificationProps) => {
    const {
        className, description, title, href,
    } = props;

    const content = (
        <Card
            theme="outlined"
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text title={title} text={description} titleWrap="nowrap" />
        </Card>
    );

    if (href) {
        return (
            <AppLink to={href}>
                {content}
            </AppLink>
        );
    }

    return content;
});
