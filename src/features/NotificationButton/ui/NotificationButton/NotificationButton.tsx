import { memo, useCallback, useState } from 'react';
import {
    Button, ButtonTheme, Drawer, Icon, Popover,
} from '@/shared/ui';
import NotificationIcon from '@/shared/assets/icons/Notification.svg?react';
import { AnimationProvider, classNames, useDevice } from '@/shared/lib';
import { NotificationList } from '../NotificationList/NotificationList';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isDrawer, setIsDrawer] = useState(false);

    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsDrawer(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawer(false);
    }, []);

    const trigger = (
        <Button
            onClick={onOpenDrawer}
            theme={ButtonTheme.CLEAR}
        >
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    if (isMobile) {
        return (
            <>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isDrawer} onClose={onCloseDrawer}>
                        <div>
                            <NotificationList />
                        </div>
                    </Drawer>
                </AnimationProvider>
            </>
        );
    }

    return (
        <Popover
            trigger={trigger}
            direction="bottom-left"
        >
            <NotificationList className={classNames(cls.notificationButton, {}, [className])} />
        </Popover>
    );
});
