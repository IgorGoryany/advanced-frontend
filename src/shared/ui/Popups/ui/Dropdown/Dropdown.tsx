import {
    Fragment, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import { AppLink } from '../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../Button/Button';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/Popups.module.scss';

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

const genericMemo: <T>(component: T) => T = memo;

export const Dropdown = genericMemo(
    <T extends string>(props: DropdownProps<T>) => {
        const {
            className,
            trigger,
            items,
            direction = 'bottom-right',
        } = props;

        const mods: Mods = {};

        const menuItemMods = (active: boolean): Mods => ({
            [popupCls.active]: active,
        });
        return (
            <Menu as="div" className={classNames(popupCls.popup, mods, [className])}>
                <Menu.Button
                    as={Button}
                    theme={ButtonTheme.CLEAR}
                >
                    {trigger}
                </Menu.Button>
                <Menu.Items className={classNames(cls.menu, mods, [cls[direction]])}>
                    {items.map((item) => {
                        const content = ({ active } : {active: boolean}) => (
                            <button
                                type="button"
                                onClick={item.onClick}
                                className={classNames(cls.menuItem, menuItemMods(active))}
                            >
                                {item.content}
                            </button>
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
