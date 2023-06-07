import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileIsLoading,
} from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
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
        expect(getProfileIsLoading(data as StateSchema)).toEqual(true);
    });

    test('work with empty State', () => {
        const data = {};
        expect(getProfileIsLoading(data as StateSchema)).toEqual(undefined);
    });
});
