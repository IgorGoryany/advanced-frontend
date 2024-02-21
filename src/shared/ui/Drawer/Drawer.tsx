import { FC, memo, ReactNode } from 'react';
import {
    classNames, useModal, useTheme,
} from '../../lib';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer: FC<DrawerProps> = memo(
    (props: DrawerProps) => {
        const {
            className,
            isOpen,
            onClose,
            children,
            lazy,
        } = props;
        const { theme } = useTheme();
        const {
            close,
            isClosing,
            isOpened,
        } = useModal({
            onClose,
            isOpen,
            lazy,
            animationDelay: 200,
        });

        const mods: Record<string, boolean | undefined> = {
            [cls.opened]: isOpened,
            [cls.isClosing]: isClosing,
        };

        return (
            <Portal>
                <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                    <Overlay onClick={close} />
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </Portal>

        );
    },
);
