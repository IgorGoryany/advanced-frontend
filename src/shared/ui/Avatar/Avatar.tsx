import {
    CSSProperties, FC, memo, useMemo, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import PresetScss from '@storybook/preset-scss';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt = 'Аватар',
    } = props;

    const mods: Mods = {};

    const styleWrapper = useMemo<CSSProperties>(() => (
        { width: `${size}px`, height: `${size}px` }
    ), [size]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.avatarWrapper, mods, [className])} style={styleWrapper}>
            <img
                src={src}
                alt={t(alt)}
                className={cls.avatar}
            />
        </div>
    );
});
