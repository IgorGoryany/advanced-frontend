import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { ReducersList } from 'shared/lib';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => function (Story: StoryFn) {
    return (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={
            { ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>
            }
        >
            <Story />
        </StoreProvider>
    );
};
