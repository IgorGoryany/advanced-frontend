import { useEffect, useState } from 'react';

import { useDebounce } from '../useDebounce/useDebounce';

export const useDevice = () => {
    let initialState: boolean;
    if (__PROJECT__ === 'jest') {
        initialState = false;
    } else {
        initialState = window
            .matchMedia('(pointer:coarse)')
            .matches;
    }

    const [isMobile, setIsMobile] = useState(initialState);

    const resizeHandler = useDebounce(() => {
        setIsMobile(window.matchMedia('(pointer:coarse)').matches);
    }, 100);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [resizeHandler]);

    return isMobile;
};
