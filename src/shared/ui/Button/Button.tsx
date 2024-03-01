import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';

import { classNames, Mods } from '../../lib';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_RED = 'outlined_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children: ReactNode
    max?: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        square,
        size = ButtonSize.M,
        theme = ButtonTheme.CLEAR,
        disabled,
        max,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.max]: max && !square,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
