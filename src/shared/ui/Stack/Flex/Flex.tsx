import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib';
import cls from './Flex.module.scss';

type FlexAlign = 'start' | 'end' | 'center';
type FlexJustify = FlexAlign | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

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
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap,
        max,
        role,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };
    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <div role={role} className={classNames(cls.flex, mods, additional)}>
            {children}
        </div>
    );
};
