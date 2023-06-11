import { CSSProperties, FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton: FC<SkeletonProps> = memo(
    (props: SkeletonProps) => {
        const {
            className,
            width,
            height,
            border,
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
