import {
    DetailedHTMLProps, HTMLAttributes, JSXElementConstructor, ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib';

import cls from './Flex.module.scss';

type FlexAlign = 'start' | 'end' | 'center';
type FlexJustify = FlexAlign | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | 4 | '8' | 8 | '16' | 16 | '32' | 32;
type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

const justifyClasses: Record<FlexJustify, string> = {
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    start: cls.justifyStart,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    end: cls.alignEnd,
    center: cls.alignCenter,
    start: cls.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gapS,
    8: cls.gapM,
    16: cls.gapL,
    32: cls.gapXL,
};
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: boolean;
    Tag?: ReactTag;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify,
        direction = 'row',
        align,
        gap,
        max,
        role,
        Tag = 'div',
        wrap,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
        [cls.wrap]: wrap,
    };
    const additional = [
        className,
        justify && justifyClasses[justify],
        align && alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <Tag role={role} className={classNames(cls.flex, mods, additional)}>
            {children}
        </Tag>
    );
};
