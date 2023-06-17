import React, { FC, useMemo, useState } from 'react';
import { classNames } from 'shared/lib';
import {
    Button, ButtonSize, ButtonTheme,
} from 'shared/ui';
import { ThemeSwitcher } from 'features/ThemeSwither';
import { LangSwitcher } from 'features/LangSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };
    const sidebarLinksList = useSelector(getSidebarLinks);

    const linksList = useMemo(() => sidebarLinksList.map(({
        Icon, path, text, authOnly,
    }) => (
        <SidebarLink
            key={path}
            text={text}
            Icon={Icon}
            path={path}
            open={open}
            authOnly={authOnly}
        />
    )), [open, sidebarLinksList]);

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

            <div className={cls.links}>

                {linksList}

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!open} className={cls.langSwitch} />
            </div>
        </div>
    );
};
