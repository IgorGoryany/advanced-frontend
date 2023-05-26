import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cls.ldsEllipsis, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
