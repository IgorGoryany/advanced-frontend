import {
    ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '../../lib';
import cls from './Select.module.scss';

export interface SelectOption<T extends string = string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    option?: SelectOption<T>[]
    value?: T
    onChange?: (value: T) => void
    disabled?: boolean
}
const genericMemo: <T>(component: T) => T = memo;

export const Select = genericMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        option = [],
        value,
        onChange,
        disabled,
    } = props;

    const optionList = useMemo(
        () => (
            option.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            ))),
        [option],
    );

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label && (
                <label className={cls.label}>
                    {`${label}>`}
                </label>
            )}
            <select
                disabled={disabled}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
