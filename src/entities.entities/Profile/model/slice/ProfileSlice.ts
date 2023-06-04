import { createSlice } from '@reduxjs/toolkit';
import { fetchingProfileData } from '../service/fetchingProfileData/fetchingProfileData';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchingProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchingProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })

            .addCase(fetchingProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
