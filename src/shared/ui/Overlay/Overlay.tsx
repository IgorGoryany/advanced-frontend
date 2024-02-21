import { FC, memo } from 'react';
import { classNames, Mods } from '@/shared/lib';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = memo(
    (props: OverlayProps) => {
        const {
            className,
            onClick,
        } = props;

        const mods: Mods = {};

        return (
            <div
                onClick={onClick}
                className={classNames(cls.overlay, mods, [className])}
            />
        );
    },
);
