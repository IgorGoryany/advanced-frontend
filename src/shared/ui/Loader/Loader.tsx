import { memo } from 'react';
import { classNames } from '../../lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames(cls.ldsEllipsis, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
));
