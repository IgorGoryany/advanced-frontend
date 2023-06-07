import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileData,
} from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    age: 22,
                    first: 'asda',
                    lastname: 'fghghf',
                },
            },
        };
        expect(getProfileData(data as StateSchema)).toEqual({
            age: 22,
            first: 'asda',
            lastname: 'fghghf',
        });
    });

    test('work with empty State', () => {
        const data = {};
        expect(getProfileData(data as StateSchema)).toEqual(undefined);
    });
});
