import React, { FC, useMemo, useState } from 'react';
import { classNames } from 'shared/lib';
import {
    Button, ButtonSize, ButtonTheme, HStack, VStack,
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
        <li className={cls.link} key={path}>
            <SidebarLink
                text={text}
                Icon={Icon}
                path={path}
                open={open}
                authOnly={authOnly}
            />
        </li>
    )), [open, sidebarLinksList]);

    return (
        <aside
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
            <VStack Tag="ul" max gap="16" className={cls.links}>
                {linksList}
            </VStack>
            <HStack justify="center" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!open} className={cls.langSwitch} />
            </HStack>
        </aside>
    );
};
