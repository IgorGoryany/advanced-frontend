import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { classNames } from 'shared/lib';
import { useAuth } from 'entities.entities/User';

import cls from './SidebarLink.module.scss';

interface SidebarLinksProps {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    text: string
    open?: boolean
    authOnly?: boolean
}

export const SidebarLink: FC<SidebarLinksProps> = memo((props: SidebarLinksProps) => {
    const {
        text,
        path,
        Icon,
        open,
        authOnly,
    } = props;

    const { t } = useTranslation();
    const isAuth = useAuth();

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.INVERTED_PRIMARY}
            className={classNames(cls.item, { [cls.open]: open })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{t(text).toLowerCase()}</span>
        </AppLink>
    );
});
