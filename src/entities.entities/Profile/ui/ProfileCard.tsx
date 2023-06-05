import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Align, Avatar,
    Input,
    Loader,
    Text,
    TextTheme,
} from 'shared/ui';
import { Currency, CurrencySelect } from 'entities.entities/Currency';
import { Country, CountrySelect } from 'entities.entities/Country';
import { Profile } from '../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeLastname?: (value: string) => void
    onChangeFirstname?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        isLoading,
        error,
        onChangeLastname,
        onChangeFirstname,
        onChangeUsername,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, mods, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, mods, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={Align.CENTER}
                />
            </div>

        );
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatar}>
                        <Avatar
                            src={data?.avatar}
                            size={100}
                        />
                    </div>
                )}
                <Input
                    placeholder={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                    disabled={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    placeholder={t('Ваша фамилия')}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    className={cls.input}
                    disabled={readonly}
                />
                {(!readonly || data?.age) && (
                    <Input
                        placeholder={t('Ваш возраст')}
                        value={data?.age}
                        onChange={onChangeAge}
                        className={cls.input}
                        disabled={readonly}
                    />
                )}
                { (!readonly || data?.username) && (
                    <Input
                        placeholder={t('Ваш ник')}
                        value={data?.username}
                        onChange={onChangeUsername}
                        className={cls.input}
                        disabled={readonly}
                    />
                )}
                {(!readonly || data?.city) && (
                    <Input
                        placeholder={t('Ваш город')}
                        value={data?.city}
                        onChange={onChangeCity}
                        className={cls.input}
                        disabled={readonly}
                    />
                )}
                <CurrencySelect
                    value={data?.currency}
                    disabled={readonly}
                    className={cls.input}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    value={data?.country}
                    disabled={readonly}
                    className={cls.input}
                    onChange={onChangeCountry}
                />
                {!readonly && (
                    <Input
                        placeholder={t('Ссылка на автар')}
                        value={data?.avatar}
                        onChange={onChangeAvatar}
                        className={cls.input}
                        disabled={readonly}
                    />
                )}
            </div>
        </div>
    );
});
