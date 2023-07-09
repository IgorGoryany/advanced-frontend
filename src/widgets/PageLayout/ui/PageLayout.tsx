import {
    FC, MutableRefObject, ReactNode, useRef,
    UIEvent,
} from 'react';
import {
    classNames, Mods, useAppDispatch, useThrottle,
    useInfiniteScroll, useLayoutInitialEffect,
} from 'shared/lib';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import cls from './PageLayout.module.scss';
import { scrollSaveAction } from '../model/slice/scrollSaveSlice';
import {
    getScrollSaveScrollByPath,
} from '../model/selectors/getScrollSave';

interface PageProps {
    className?: string;
    children?: ReactNode
    onScrollEnd?: () => void
    saveScroll?: boolean
}

export const PAGE_ID = 'PAGE_ID';

export const PageLayout: FC<PageProps> = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        saveScroll = true,
    } = props;
    const mods: Mods = {};
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) => (
        getScrollSaveScrollByPath(state, pathname)
    ));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((event: UIEvent<HTMLElement>) => {
        if (saveScroll) {
            dispatch(scrollSaveAction.setScrollPosition({
                position: event.currentTarget.scrollTop,
                path: pathname,
            }));
        }
    }, 100);

    useLayoutInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.page, mods, [className])}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd && <div ref={triggerRef} />}
        </main>
    );
};
