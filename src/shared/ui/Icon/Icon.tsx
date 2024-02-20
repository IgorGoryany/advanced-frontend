import React, { FC, memo } from 'react';
import { classNames } from '../../lib';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
    inverted?: boolean;
}

export const Icon: FC<IconProps> = memo(
    (props: IconProps) => {
        const {
            Svg,
            className,
            inverted,
        } = props;

        const mainClass = inverted ? cls.inverted : cls.icon;

        return (
            <Svg className={classNames(mainClass, {}, [className])} />
        );
    },
);
