import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

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
        expect(getLoginError(state as StateSchema)).toBe('sada');
    });
    test('should return initialState', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
