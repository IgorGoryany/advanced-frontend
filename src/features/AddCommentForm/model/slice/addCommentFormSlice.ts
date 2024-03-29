import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/AddCommentForm';

const initialState: AddCommentFormSchema = {
    isLoading: false,
    error: undefined,
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },

});

export const { actions: addCommentFormAction } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
