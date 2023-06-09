import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

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
        expect(getLoginUsername(state as StateSchema)).toBe('dsa');
    });
    test('should return initialState', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
