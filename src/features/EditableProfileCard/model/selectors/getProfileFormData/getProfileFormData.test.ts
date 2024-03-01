import { StateSchema } from '@/app/providers/StoreProvider';

import {
    getProfileFormData,
} from './getProfileFormData';

describe('getProfileFormData.test', () => {
    test('', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
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
        expect(getProfileFormData(data as StateSchema)).toEqual({
            age: 22,
            first: 'asasdasdda',
            lastname: 'fghghf',
        });
    });
    test('work with empty State', () => {
        const data = {};
        expect(getProfileFormData(data as StateSchema)).toEqual(undefined);
    });
});
