import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '@/entities/Profile';

import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError.test', () => {
    test('', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: false,
                validateErrors: [
                    ValidateProfileError.INCORRECT_COUNTRY_DATA,
                    ValidateProfileError.INCORRECT_SECOND_NAME_DATA,
                ],
                error: 'asdasd',
                data: {
                    age: 22,
                    first: 'asda',
                    lastname: 'fghghf',
                },
                formData: {
                    age: 22,
                    first: 'asasdasdda',
                    lastname: 'fghghf',
                },
            },
        };
        expect(getProfileValidateError(data as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY_DATA,
            ValidateProfileError.INCORRECT_SECOND_NAME_DATA,
        ]);
    });

    test('work with empty State', () => {
        const data = {};
        expect(getProfileValidateError(data as StateSchema)).toEqual(undefined);
    });
});
