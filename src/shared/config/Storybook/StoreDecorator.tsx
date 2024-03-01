import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { ReducersList } from '@/shared/lib';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
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
