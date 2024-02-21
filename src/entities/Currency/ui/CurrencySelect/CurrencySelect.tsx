import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib';
import {
    ListBox, ListBoxItem,
} from '@/shared/ui';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string
    onChange?: (value: Currency) => void
    disabled?: boolean
    value?: Currency
}
const optionList: ListBoxItem<Currency>[] = [
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

    const onChangeCurrency = useCallback((value: Currency) => {
        onChange?.(value);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <ListBox<Currency>
            className={classNames('', mods, [className])}
            items={optionList}
            onChange={onChangeCurrency}
            value={value}
            disabled={disabled}
            label={t('Валюта')}
            defaultValue={(t('Валюта'))}
        />
    );
});
