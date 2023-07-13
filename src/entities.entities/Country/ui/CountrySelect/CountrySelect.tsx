import { FC, memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    ListBox, ListBoxItem, Select, SelectOption,
} from 'shared/ui';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string
    disabled?: boolean
    value?: Country
    onChange?: (value: Country) => void
}

const optionList: ListBoxItem<Country>[] = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        className,
        disabled,
        value,
        onChange,
    } = props;

    const mods: Mods = {};

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const { t } = useTranslation();
    return (
        <ListBox<Country>
            className={classNames('', mods, [className])}
            disabled={disabled}
            value={value}
            label={t('Страна')}
            onChange={onChangeCountry}
            items={optionList}
        />
    );
});
