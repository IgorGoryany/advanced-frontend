import { memo } from 'react';
import { classNames, Mods } from '../../lib';
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
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type TextWrap = 'warp' | 'nowrap' | 'pretty'

interface TextProps {
    className?: string;
    title?: string | number;
    text?: string | number;
    theme?: TextTheme;
    titleAlign?: TextAlign;
    textAlign?: TextAlign;
    align?: TextAlign;
    size?: TextSize;
    textWrap?: TextWrap;
    titleWrap?: TextWrap;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        titleAlign = '',
        align = TextAlign.LEFT,
        textAlign = '',
        size = TextSize.M,
        textWrap = 'pretty',
        titleWrap = 'pretty',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {};
    const additional = [className, cls[theme], cls[align], cls[size]];

    return (
        <div className={classNames(cls.text, mods, additional)}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Title`}
                    className={classNames(cls.title, {}, [cls[titleAlign], cls[titleWrap]])}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Text`}
                    className={classNames(cls.text, {}, [cls[textAlign], cls[textWrap]])}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
