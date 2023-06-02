import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginForm = (state: StateSchema) => (
    state?.loginForm || { isLoading: false, password: '', username: '' }
);
