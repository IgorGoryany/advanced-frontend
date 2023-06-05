import { FC, memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string
    onChange?: (value: Currency) => void
    disabled?: boolean
    value?: Currency
}
const optionList: SelectOption[] = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        disabled,
        value = Currency.RUB,
    } = props;
    const mods: Mods = {};

    const onChangeCurrency = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const { t } = useTranslation();
    return (
        <Select
            className={classNames('', mods, [className])}
            disabled={disabled}
            value={value}
            onChange={onChangeCurrency}
            label={t('Валюта')}
            option={optionList}
        />
    );
});
