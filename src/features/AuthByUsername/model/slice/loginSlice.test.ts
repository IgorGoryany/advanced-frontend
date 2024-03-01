import { LoginSchema } from '../types/LoginSchema';

import { loginAction, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: LoginSchema = {
            username: '',
            password: '',
            isLoading: false,
        };
        expect(
            loginReducer(state, loginAction.setUsername('1234')),
        )
            .toEqual({
                username: '1234',
                password: '',
                isLoading: false,
            });
    });

    test('set password', () => {
        const state: LoginSchema = {
            username: '',
            password: '',
            isLoading: false,
        };
        expect(
            loginReducer(state, loginAction.setPassword('1234')),
        )
            .toEqual({
                username: '',
                password: '1234',
                isLoading: false,
            });
    });

    test('clean form', () => {
        const state: LoginSchema = {
            username: '1212',
            password: '12312',
            isLoading: true,
            error: 'asdasd',
        };
        expect(
            loginReducer(state, loginAction.clearForm()),
        )
            .toEqual({
                username: '',
                password: '',
                isLoading: false,
                error: undefined,
            });
    });
});
