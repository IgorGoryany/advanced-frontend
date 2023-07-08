import { FC, memo, useCallback } from 'react';
import { classNames, Mods, useAppDispatch } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import { useAuth } from 'entities.entities/User';
import {
    getProfileData,
} from '../../model/selectors/getProfileData/getProfileData';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileAction } from '../../model/slice/profileSlice';
import {
    updateProfileData,
} from '../../model/service/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const mods: Mods = {};
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useAuth();
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileAction.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profilePageHeader, mods, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readonly ? (
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINED} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <>
                        <Button
                            className={cls.cancelBtn}
                            theme={ButtonTheme.OUTLINED_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button theme={ButtonTheme.OUTLINED} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )
            )}
        </div>
    );
});
