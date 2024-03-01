import React, { FC, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib';
import {
    Button, ButtonSize, ButtonTheme, HStack, VStack,
} from '@/shared/ui';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { SidebarLink } from '../SidebarLink/SidebarLink';

import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen((prevState) => !prevState);
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
                open={isOpen}
                authOnly={authOnly}
            />
        </li>
    )), [isOpen, sidebarLinksList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.open]: isOpen }, [className])}
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
                {isOpen ? '<' : '>'}
            </Button>
            <VStack Tag="ul" max gap="16" className={cls.links}>
                {linksList}
            </VStack>
            <HStack justify="center" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!isOpen} className={cls.langSwitch} />
            </HStack>
        </aside>
    );
};
