import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

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
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('should return initialState', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
