import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string | number
    text?: string | number
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    const mods: Record<string, boolean | undefined> = {};

    return (
        <div className={classNames(cls.text, mods, [className, cls[theme]])}>
            {title ? <h2 className={cls.title}>{title}</h2> : null}
            {text ? <p className={cls.text}>{text}</p> : null}
        </div>
    );
});
