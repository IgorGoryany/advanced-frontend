import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver;
        if (callback) {
            const optons = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entries]) => {
                if (entries.isIntersecting) {
                    callback();
                }
            }, optons);

            observer.observe(triggerRef.current);
        }
        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
