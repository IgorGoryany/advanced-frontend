import {
    CSSProperties, FC, memo, MutableRefObject, useEffect, useMemo, useRef,
} from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    zoom?: number;
    position?: string;
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt = 'Аватар',
        zoom = 1,
        position = '0, 0',
    } = props;

    const mods: Mods = {};

    const styleWrapper = useMemo<CSSProperties>(() => (
        { width: `${size}px`, height: `${size}px` }
    ), [size]);

    const styleAvatar = useMemo<CSSProperties>(() => (
        { height: `${100 * zoom}%`, transform: `translate(${position})` }
    ), [position, zoom]);

    return (
        <div className={classNames(cls.avatarWrapper, mods, [className])} style={styleWrapper}>
            <img
                src={src}
                alt={alt}
                className={cls.avatar}
                style={styleAvatar}
            />
        </div>
    );
});
