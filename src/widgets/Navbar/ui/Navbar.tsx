import React, { FC } from 'react';
import { routePaths } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={routePaths.main}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                >
                    {t('Главная').toLowerCase()}
                </AppLink>
                <AppLink
                    to={routePaths.about}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                >
                    {t('О сайте').toLowerCase()}
                </AppLink>
            </div>
        </div>
    );
};
