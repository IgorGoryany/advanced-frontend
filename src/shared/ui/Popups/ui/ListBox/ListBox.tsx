import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames, Mods } from '@/shared/lib';
import { DropdownDirection } from '@/shared/types';
import { genericMemo } from '@/shared/const/genericMemo';

import { HStack } from '../../../Stack/HStack/HStack';
import { Button, ButtonTheme } from '../../../Button/Button';

import popupCls from '../../styles/Popups.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string | number;
    onChange: (value: T) => void;
    disabled?: boolean
    direction?: DropdownDirection;
    label?: string
}

export const ListBox = genericMemo(<T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        disabled,
        direction = 'bottom-right',
        label,
    } = props;

    const mods: Mods = {};

    return (
        <HStack gap={8}>
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}
            <HListBox
                as="div"
                className={classNames(popupCls.popup, mods, [className])}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                <HListBox.Button as="div">
                    <HStack>
                        <Button theme={ButtonTheme.OUTLINED} disabled={disabled}>
                            {value ?? defaultValue}
                        </Button>
                    </HStack>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [popupCls[direction]])}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.option, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!'}
                                &nbsp;
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});
