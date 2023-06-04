import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const fetchingProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchingProfileData',
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    }
    ,
);
