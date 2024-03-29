import { TestAsyncThunk } from '@/shared/lib/testing';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import {
    fetchingProfileData,
} from './fetchingProfileData';

const profile: DeepPartial<Profile> = {
    first: 'Игорь',
    lastname: 'Горяный',
    age: 22,
    city: 'Москва',
    country: Country.Armenia,
    currency: Currency.EUR,
    username: 'Mjbaron',
    id: 1,
};
describe('fetchingProfileData.test', () => {
    test('success fetch profile', async () => {
        const thunk = new TestAsyncThunk(fetchingProfileData);
        thunk.$api.get.mockReturnValue(Promise.resolve({ data: profile }));
        const result = await thunk.callThunk('1');

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('not success login', async () => {
        const thunk = new TestAsyncThunk(fetchingProfileData);
        thunk.$api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.$api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
