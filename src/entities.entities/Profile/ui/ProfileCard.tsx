import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, Input, Text,
} from 'shared/ui';
import { useSelector } from 'react-redux';
import {
    getProfileData,
} from 'entities.entities/Profile/model/selectors/getProfileData/getProfileData';
import {
    getProfileIsLoading,
} from 'entities.entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
    getProfileError,
} from 'entities.entities/Profile/model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.button} theme={ButtonTheme.OUTLINED}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    placeholder={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                    disabled
                />
                <Input
                    placeholder={t('Ваша фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                    disabled
                />
            </div>
        </div>
    );
};
