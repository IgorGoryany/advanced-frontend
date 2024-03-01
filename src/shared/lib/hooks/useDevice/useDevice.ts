import { useEffect, useState } from 'react';

import { useDebounce } from '../useDebounce/useDebounce';

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(
        window
            .matchMedia('(pointer:coarse)')
            .matches,
    );

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
