import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum Align {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string
    title?: string | number
    text?: string | number
    theme?: TextTheme
    titleAlign?: Align
    textAlign?: Align
    align?: Align
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        titleAlign = '',
        align = Align.LEFT,
        textAlign = '',
    } = props;

    const mods: Record<string, boolean | undefined> = {};

    return (
        <div className={classNames(cls.text, mods, [className, cls[theme], cls[align]])}>
            {title && (
                <h2
                    className={classNames(cls.title, {}, [cls[titleAlign]])}
                >
                    {title}
                </h2>
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
