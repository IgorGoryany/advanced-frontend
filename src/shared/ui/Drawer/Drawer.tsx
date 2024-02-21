import { FC, memo, ReactNode } from 'react';
import { classNames, Mods, useTheme } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer: FC<DrawerProps> = memo(
    (props: DrawerProps) => {
        const {
            className,
            isOpen,
            onClose,
            children,
        } = props;
        const { theme } = useTheme();

        const mods: Mods = {
            [cls.opened]: isOpen,
        };

        const { t } = useTranslation();
        return (
            <Portal>
                <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                    <Overlay onClick={onClose} />
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </Portal>

        );
    },
);
