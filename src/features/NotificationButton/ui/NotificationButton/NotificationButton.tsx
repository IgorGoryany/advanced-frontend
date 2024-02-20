import { Icon, Popover } from 'shared/ui';
import NotificationIcon from 'shared/assets/icons/Notification.svg';
import { memo } from 'react';
import { classNames } from 'shared/lib';
import { NotificationList } from '../NotificationList/NotificationList';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            trigger={(
                <Icon Svg={NotificationIcon} inverted />
            )}
            direction="bottom-left"
        >
            <NotificationList className={classNames(cls.notificationButton, {}, [className])} />
        </Popover>
    );
});
