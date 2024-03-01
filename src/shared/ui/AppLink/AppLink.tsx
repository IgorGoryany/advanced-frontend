import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '../../lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED_PRIMARY = 'inverted-primary',
    SECONDARY = 'secondary',
    INVERTED_SECONDARY = 'inverted-secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode
}

export const AppLink = memo((props:AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.INVERTED_PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
