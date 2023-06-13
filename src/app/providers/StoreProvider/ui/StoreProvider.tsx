import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(initialState, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
