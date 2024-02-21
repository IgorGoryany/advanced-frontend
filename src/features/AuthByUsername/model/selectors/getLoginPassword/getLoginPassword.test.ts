import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

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
        expect(getLoginPassword(state as StateSchema)).toBe('asd');
    });
    test('should return initialState', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
