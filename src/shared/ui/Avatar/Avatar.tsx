import {
    CSSProperties, FC, memo, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    zoom?: number
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt = 'Аватар',
        zoom = 1,
    } = props;

    const mods: Mods = {};

    const styleWrapper = useMemo<CSSProperties>(() => (
        { width: `${size}px`, height: `${size}px` }
    ), [size]);

    const styleAvatar = useMemo<CSSProperties>(() => (
        { height: `${100 * zoom}%` }
    ), [zoom]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.avatarWrapper, mods, [className])} style={styleWrapper}>
            <img
                src={src}
                alt={t(alt)}
                className={cls.avatar}
                style={styleAvatar}
            />
        </div>
    );
});
