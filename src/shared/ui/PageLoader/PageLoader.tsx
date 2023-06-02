import { FC } from 'react';
import { classNames } from '../../lib';
import { Loader } from '../Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
