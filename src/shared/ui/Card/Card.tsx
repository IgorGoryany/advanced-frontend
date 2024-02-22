import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '../../lib';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme
    max?: boolean
}

export const Card: FC<CardProps> = memo(
    (props: CardProps) => {
        const {
            className,
            children,
            theme = 'normal',
            max,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.max]: max,
        };

        return (
            <div className={classNames(cls.card, mods, [className, cls[theme]])} {...otherProps}>
                {children}
            </div>
        );
    },
);
