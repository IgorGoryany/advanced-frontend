import {
    FC, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    classNames,
    Mods,
    useAppDispatch,
    useInfiniteScroll,
    useLayoutInitialEffect,
    useThrottle,
} from '@/shared/lib';
import { StateSchema } from '@/app/providers/StoreProvider';
import { PAGE_ID } from '@/shared/const/ids';

import { TestProps } from '@/shared/types';

import { scrollSaveAction } from '../model/slice/scrollSaveSlice';
import { getScrollSaveScrollByPath } from '../model/selectors/getScrollSave';

import cls from './PageLayout.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children?: ReactNode
    onScrollEnd?: () => void
    saveScroll?: boolean
}

export const PageLayout: FC<PageProps> = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        saveScroll = true,
        'data-testid': dataTestId,
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
        // @ts-ignore
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            data-testid={dataTestId}
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
