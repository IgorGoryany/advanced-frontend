import {
    ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    option?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    disabled?: boolean
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
    }, [onChange]);

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            <label className={cls.label}>
                {label && `${label}>`}
            </label>
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
