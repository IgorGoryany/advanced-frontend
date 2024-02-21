import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalParams {
    onClose?: () => void;
    animationDelay: number;
    isOpen?: boolean;
    lazy?: boolean;
}

export const useModal = ({ animationDelay, isOpen, onClose }: UseModalParams) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

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

    return {
        isClosing, isMounted, isOpened, close,
    };
};
