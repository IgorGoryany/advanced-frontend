import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import {
    Button, ButtonSize, ButtonTheme, AppLink, AppLinkTheme, ThemeSwitcher, LangSwitcher,
} from 'shared/ui';
import { routePaths } from 'shared/config';
import { useTranslation } from 'react-i18next';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import HomePageIcon from 'shared/assets/icons/HomePageIcon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string | null
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.open]: open }, [className])}
        >
            <Button
                data-testid="toggle"
                type="button"
                className={cls.toggleBtn}
                onClick={toggleSidebar}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {open ? '<' : '>'}
            </Button>

            <div className={cls.items}>

                <AppLink
                    to={routePaths.main}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                    className={cls.item}
                >
                    <HomePageIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная').toLowerCase()}</span>
                </AppLink>

                <AppLink
                    to={routePaths.about}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                    className={cls.item}
                >
                    <AboutPageIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте').toLowerCase()}</span>
                </AppLink>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!open} className={cls.langSwitch} />
            </div>
        </div>
    );
};
