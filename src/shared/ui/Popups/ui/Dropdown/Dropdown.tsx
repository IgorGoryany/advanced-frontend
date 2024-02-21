import {
    Fragment, ReactNode, useCallback,
} from 'react';
import { Menu } from '@headlessui/react';
import { classNames, Mods } from '@/shared/lib';
import { DropdownDirection } from '@/shared/types';
import { genericMemo } from '@/shared/const/genericMemo';
import { AppLink } from '../../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../../Button/Button';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/Popups.module.scss';

export interface DropdownItem<T extends string> {
    content: T;
    disabled?: boolean;
    onClick?: () => void
    href?: string
}

interface DropdownProps<T extends string> {
    className?: string;
    direction?: DropdownDirection
    items: DropdownItem<T>[];
    trigger: ReactNode;
}

export const Dropdown = genericMemo(
    <T extends string>(props: DropdownProps<T>) => {
        const {
            className,
            trigger,
            items,
            direction = 'bottom-right',
        } = props;

        const mods: Mods = {};

        const menuItemMods = useCallback((active: boolean): Mods => ({
            [popupCls.active]: active,
        }), []);
        return (
            <Menu as="div" className={classNames(popupCls.popup, mods, [className])}>
                <Menu.Button
                    as={Button}
                    theme={ButtonTheme.CLEAR}
                >
                    {trigger}
                </Menu.Button>
                <Menu.Items className={classNames(cls.menu, mods, [popupCls[direction]])}>
                    {items.map((item) => {
                        const content = ({ active } : {active: boolean}) => (
                            // eslint-disable-next-line react/button-has-type
                            <Button
                                onClick={item.onClick}
                                className={classNames(cls.menuItem, menuItemMods(active))}
                            >
                                {item.content}
                            </Button>
                        );
                        if (item.href) {
                            return (
                                <Menu.Item
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                    key={item.content}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item as={Fragment} disabled={item.disabled} key={item.content}>
                                {content}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Menu>
        );
    },
);
