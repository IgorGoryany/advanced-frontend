import { useLayoutEffect } from 'react';

export function useLayoutInitialEffect(callback: () => void, deps: any[] = []) {
    useLayoutEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
