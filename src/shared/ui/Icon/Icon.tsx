import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    className?: string
}

export const Icon: FC<IconProps> = memo(
    (props: IconProps) => {
        const {
            Svg,
            className,
        } = props;

        return (
            <Svg className={classNames(cls.icon, {}, [className])} />
        );
    },
);
