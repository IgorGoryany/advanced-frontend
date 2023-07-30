import {
    Fragment, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

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
            [cls.active]: active,
        });
        return (
            <Menu as="div" className={classNames(cls.dropdown, mods, [className])}>
                <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
                <Menu.Items className={classNames(cls.menu, mods, [direction])}>
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
