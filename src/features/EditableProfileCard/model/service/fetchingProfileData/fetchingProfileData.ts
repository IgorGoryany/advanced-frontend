import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities.entities/Profile';

export const fetchingProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchingProfileData',
    async (profileId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.$api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            // console.log(e);
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
