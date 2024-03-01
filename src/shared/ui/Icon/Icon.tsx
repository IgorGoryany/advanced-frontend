import React, { ComponentPropsWithoutRef, FC, memo } from 'react';

import { classNames } from '../../lib';

import cls from './Icon.module.scss';

interface IconProps extends ComponentPropsWithoutRef<'svg'>{
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
            ...otherProps
        } = props;

        const mainClass = inverted ? cls.inverted : cls.icon;

        return (
            <Svg className={classNames(mainClass, {}, [className])} {...otherProps} />
        );
    },
);
