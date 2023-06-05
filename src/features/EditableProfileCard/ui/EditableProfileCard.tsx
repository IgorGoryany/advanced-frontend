import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared/lib';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities.entities/Profile';
import { Currency } from 'entities.entities/Currency';
import { Country } from 'entities.entities/Country';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { profileAction, profileReducer } from '../model/slice/ProfileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';

import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { fetchingProfileData } from '../model/service/fetchingProfileData/fetchingProfileData';

interface EditableProfileCardProps {
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const isNumber = (value: string) => Number.isInteger(Number(value));

export const EditableProfileCard: FC<EditableProfileCardProps> = memo(() => {
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchingProfileData());
    }, [dispatch]);

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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});
