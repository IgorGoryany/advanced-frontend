import { memo } from 'react';
import { classNames } from '../../lib';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string | number
    text?: string | number
    theme?: TextTheme
    titleAlign?: TextAlign
    textAlign?: TextAlign
    align?: TextAlign
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        titleAlign = '',
        align = TextAlign.LEFT,
        textAlign = '',
        size = TextSize.SIZE_M,
    } = props;

    const mods: Record<string, boolean | undefined> = {};
    const additional = [className, cls[theme], cls[align], cls[size]];

    return (
        <div className={classNames(cls.text, mods, additional)}>
            {title && (
                <p
                    className={classNames(cls.title, {}, [cls[titleAlign]])}
                >
                    {title}
                </p>
            )}
            {text && (
                <p
                    className={classNames(cls.text, {}, [cls[textAlign]])}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
