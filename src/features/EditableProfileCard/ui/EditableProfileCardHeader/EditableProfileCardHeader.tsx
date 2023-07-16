import { FC, memo, useCallback } from 'react';
import { classNames, Mods, useAppDispatch } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, HStack, Text,
} from 'shared/ui';
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

interface ProfilePageHeaderProps {
    className?: string
}

export const EditableProfileCardHeader: FC<ProfilePageHeaderProps> = memo((props: ProfilePageHeaderProps) => {
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
        <HStack justify="between" className={classNames('', mods, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readonly ? (
                    <Button
                        data-testid="EditableProfileCardHeader.EditButton"
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <HStack gap="8">
                        <Button
                            theme={ButtonTheme.OUTLINED_RED}
                            onClick={onCancelEdit}
                            data-testid="EditableProfileCardHeader.CancelEditButton"
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINED}
                            onClick={onSave}
                            data-testid="EditableProfileCardHeader.SaveEditButton"
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                )
            )}
        </HStack>
    );
});
