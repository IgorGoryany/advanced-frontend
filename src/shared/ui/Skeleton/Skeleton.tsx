import { CSSProperties, memo } from 'react';

import { classNames, Mods } from '../../lib';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = memo(
    (props: SkeletonProps) => {
        const {
            className,
            width,
            height,
            border = '5px',
        } = props;
        const mods: Mods = {};

        const style: CSSProperties = {
            width,
            height,
            borderRadius: border,
        };

        return (
            <div
                style={style}
                className={classNames(cls.skeleton, mods, [className])}
            />
        );
    },
);
