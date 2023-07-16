import {
    FC, memo, useCallback, useMemo,
} from 'react';
import {
    DynamicModuleLoader, ReducersList, useAppDispatch, useInitialEffect,
} from 'shared/lib';
import { useSelector } from 'react-redux';
import { ProfileCard, ValidateProfileError } from 'entities.entities/Profile';
import { Currency } from 'entities.entities/Currency';
import { Country } from 'entities.entities/Country';
import { Text, TextTheme, VStack } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { profileAction, profileReducer } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { fetchingProfileData } from '../model/service/fetchingProfileData/fetchingProfileData';
import { getProfileValidateError } from '../model/selectors/getProfileValidateError/getProfileValidateError';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    id?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const isNumber = (value: string) => Number.isInteger(Number(value));

export const EditableProfileCard = memo(({ id }:EditableProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);

    const validateErrorsTranslates = useMemo(() => ({
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_SECOND_NAME_DATA]: t('Фамилия обязательное поле'),
        [ValidateProfileError.INCORRECT_AGE_DATA]: t('Heкорректный возраст'),
        [ValidateProfileError.INCORRECT_NAME_DATA]: t('Имя обязательное поле'),
        [ValidateProfileError.INCORRECT_COUNTRY_DATA]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_FULL_NAME_DATA]: t('Имя и фамилии обязателные поля'),
    }), [t]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileAction.editForm({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileAction.editForm({ first: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileAction.editForm({ username: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        if (isNumber(value)) {
            dispatch(profileAction.editForm({ age: Number(value) || 0 }));
        }
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileAction.editForm({ city: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileAction.editForm({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileAction.editForm({ currency: value || Currency.RUB }));
    }, [dispatch]);

    const onChangeCounty = useCallback((value: Country) => {
        dispatch(profileAction.editForm({ country: value || Country.Russia }));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) dispatch(fetchingProfileData(id));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap={8} max>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        text={validateErrorsTranslates[error]}
                        key={error}
                        theme={TextTheme.ERROR}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                    onChangeUsername={onChangeUsername}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCounty}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
