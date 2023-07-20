import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile, ValidateProfileError } from 'entities.entities/Profile';
import { Country } from 'entities.entities/Country';
import { Currency } from 'entities.entities/Currency';
import {
    updateProfileData,
} from './updateProfileData';

const profile: DeepPartial<Profile> = {
    first: 'Игорь',
    lastname: 'Горяный',
    age: 22,
    city: 'Москва',
    country: Country.Armenia,
    currency: Currency.EUR,
    username: 'Mjbaron',
};

describe('updateProfileData.test', () => {
    test('success update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: profile,
            },
        });

        thunk.$api.put.mockReturnValue(Promise.resolve({ data: profile }));

        const result = await thunk.callThunk();

        expect(thunk.$api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: profile,
            },
        });

        thunk.$api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.$api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('no data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);

        thunk.$api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.$api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
    });
});
