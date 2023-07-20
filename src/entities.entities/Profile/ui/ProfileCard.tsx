import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    TextAlign, Avatar,
    Input,
    Loader,
    Text,
    TextTheme, HStack, VStack,
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
            <HStack
                justify="center"
                max
                className={classNames(cls.profileCard, mods, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.profileCard, mods, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </HStack>

        );
    }

    return (

        <VStack gap="8" max className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatar}>
                    <Avatar
                        src={data?.avatar}
                        size={100}
                    />
                </HStack>
            )}
            <Input
                placeholder={t('Ваше имя')}
                value={data?.first}
                disabled={readonly}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.first"
            />
            <Input
                placeholder={t('Ваша фамилия')}
                value={data?.lastname}
                onChange={onChangeLastname}
                disabled={readonly}
                data-testid="ProfileCard.lastname"
            />
            {(!readonly || data?.age) && (
                <Input
                    placeholder={t('Ваш возраст')}
                    value={data?.age}
                    onChange={onChangeAge}
                    disabled={readonly}
                    data-testid="ProfileCard.age"
                />
            )}
            { (!readonly || data?.username) && (
                <Input
                    placeholder={t('Ваш ник')}
                    value={data?.username}
                    onChange={onChangeUsername}
                    disabled={readonly}
                    data-testid="ProfileCard.username"
                />
            )}
            {(!readonly || data?.city) && (
                <Input
                    placeholder={t('Ваш город')}
                    value={data?.city}
                    onChange={onChangeCity}
                    disabled={readonly}
                    data-testid="ProfileCard.city"
                />
            )}
            <CurrencySelect
                value={data?.currency}
                disabled={readonly}
                onChange={onChangeCurrency}
                data-testid="ProfileCard.currency"
            />
            <CountrySelect
                value={data?.country}
                disabled={readonly}
                onChange={onChangeCountry}
                data-testid="ProfileCard.country"
            />
            {!readonly && (
                <Input
                    placeholder={t('Ссылка на автар')}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    disabled={readonly}
                    data-testid="ProfileCard.avatar"
                />
            )}
        </VStack>
    );
});
