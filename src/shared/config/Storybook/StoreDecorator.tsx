import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities.entities/Profile';
import { ReducersList } from 'shared/lib';

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
