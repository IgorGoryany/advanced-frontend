import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div
        className={classNames(cls.pageLoader, {}, [className])}
        data-testid="loader"
    >
        <Loader />
    </div>
));
