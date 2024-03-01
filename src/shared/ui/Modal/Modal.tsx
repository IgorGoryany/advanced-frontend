import {
    FC, ReactNode,
} from 'react';

import { useModal, classNames, useTheme } from '../../lib';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
    children: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { theme } = useTheme();

    const {
        close,
        isClosing,
        isMounted,
        isOpened,
    } = useModal({
        onClose,
        isOpen,
        animationDelay: 200,
        lazy,
    });

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpened,
        [cls.isClosing]: isClosing,
    };

    if (!isMounted && lazy) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
