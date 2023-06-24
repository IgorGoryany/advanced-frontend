import {
    FC, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './PageLayout.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode
    onScrollEnd?: () => void
}

export const PageLayout: FC<PageProps> = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const mods: Mods = {};
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.page, mods, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
