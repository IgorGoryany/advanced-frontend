import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
            const user = localStorage.getItem(action.payload);
            if (user) {
                state.authData = JSON.parse(user);
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
