import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setFeaturesFlag } from '@/shared/features';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<string>) => {
            const userString = localStorage.getItem(action.payload);
            if (userString) {
                const user = JSON.parse(userString) as User;
                state.authData = user;
                setFeaturesFlag(user?.features ?? {});
            }
            state._mounted = true;
        },
        logout: (state, action: PayloadAction<string>) => {
            state.authData = undefined;
            localStorage.removeItem(action.payload);
        },
    },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
