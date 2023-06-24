import {
    FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, useTheme } from '../../lib';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
    children: ReactNode
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpened,
        [cls.isClosing]: isClosing,
    };

    const contentClickHandler = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        } else {
            window.removeEventListener('keydown', onKeydown);
        }
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeydown]);

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true);

            setTimeout(() => {
                setIsOpened(true);
            }, 0);
        } else if (isOpen && isMounted) {
            setIsOpened(true);
        } else {
            setIsOpened(false);
        }
    }, [isMounted, isOpen]);

    if (!isMounted && lazy) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    {/* @ts-ignore */}
                    <div className={cls.content} onClick={contentClickHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
