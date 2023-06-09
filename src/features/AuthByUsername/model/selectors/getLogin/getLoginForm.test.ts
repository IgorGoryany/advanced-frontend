import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginForm } from './getLoginForm';

describe('getLoginForm.test', () => {
    test('should return loginState', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                password: 'asd',
                username: 'dsa',
                error: 'sada',
            },
        };
        expect(getLoginForm(state as StateSchema)).toEqual({
            isLoading: true,
            password: 'asd',
            username: 'dsa',
            error: 'sada',
        });
    });
    test('should return initialState', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginForm(state as StateSchema)).toEqual({ isLoading: false, password: '', username: '' });
    });
});
