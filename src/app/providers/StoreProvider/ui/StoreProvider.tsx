import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const store = createReduxStore(initialState, asyncReducers, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
