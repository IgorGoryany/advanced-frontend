import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '../../lib';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Card: FC<CardProps> = memo(
    (props: CardProps) => {
        const {
            className,
            children,
            ...otherProps
        } = props;

        const mods: Mods = {};

        return (
            <div className={classNames(cls.card, mods, [className])} {...otherProps}>
                {children}
            </div>
        );
    },
);
