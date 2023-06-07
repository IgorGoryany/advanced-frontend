import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileError,
} from './getProfileError';

describe('getProfileError.test', () => {
    test('', () => {
        const data: DeepPartial<StateSchema> = {
            profile: {
                error: 'asdasd',
                data: {
                    age: 22,
                    first: 'asda',
                    lastname: 'fghghf',
                },
            },
        };
        expect(getProfileError(data as StateSchema)).toEqual('asdasd');
    });

    test('work with empty State', () => {
        const data = {};
        expect(getProfileError(data as StateSchema)).toEqual(undefined);
    });
});
