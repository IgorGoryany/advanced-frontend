import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileReadonly,
} from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: false,
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
        expect(getProfileReadonly(data as StateSchema)).toEqual(false);
    });

    test('work with empty State', () => {
        const data = {};
        expect(getProfileReadonly(data as StateSchema)).toEqual(undefined);
    });
});
