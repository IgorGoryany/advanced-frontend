import { Fragment, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib';
import { Listbox as HListBox } from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import { HStack } from '../Stack/HStack/HStack';
import { Button, ButtonTheme } from '../Button/Button';
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
const genericMemo: <T>(component: T) => T = memo;

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
    const additionalClasses = [direction];

    return (
        <HStack gap={8}>
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}
            <HListBox
                as="div"
                className={classNames(cls.listBox, mods, [className])}
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
                <HListBox.Options className={classNames(cls.options, {}, additionalClasses)}>
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
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
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
