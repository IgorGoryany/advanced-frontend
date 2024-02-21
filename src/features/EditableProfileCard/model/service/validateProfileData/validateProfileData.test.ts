import { Profile, ValidateProfileError } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';

const profile: Profile = {
    first: 'Игорь',
    lastname: 'Горяный',
    age: 22,
    city: 'Москва',
    country: Country.Armenia,
    currency: Currency.EUR,
    username: 'Mjbaron',
};
describe('validateProfileData.test', () => {
    test('success validate', async () => {
        expect(validateProfileData(profile)).toEqual([]);
    });

    test('INCORRECT_COUNTRY_DATA', async () => {
        const errorsArr = [ValidateProfileError.INCORRECT_COUNTRY_DATA];

        expect(validateProfileData({
            first: 'Игорь',
            lastname: 'Горяный',
            age: 22,
            city: 'Москва',
            currency: Currency.EUR,
            username: 'Mjbaron',
        })).toEqual(errorsArr);
    });
    test('INCORRECT_NAME_DATA', async () => {
        const errorsArr = [ValidateProfileError.INCORRECT_NAME_DATA];

        expect(validateProfileData(
            {
                lastname: 'Горяный',
                age: 22,
                city: 'Москва',
                country: Country.Armenia,
                currency: Currency.EUR,
                username: 'Mjbaron',
            },
        )).toEqual(errorsArr);
    });
    test('INCORRECT_FULL_NAME_DATA', async () => {
        const errorsArr = [ValidateProfileError.INCORRECT_FULL_NAME_DATA];

        expect(validateProfileData({
            age: 22,
            city: 'Москва',
            country: Country.Armenia,
            currency: Currency.EUR,
            username: 'Mjbaron',
        })).toEqual(errorsArr);
    });
    test('INCORRECT_SECOND_NAME_DATA', async () => {
        const errorsArr = [ValidateProfileError.INCORRECT_SECOND_NAME_DATA];

        expect(validateProfileData({
            first: 'Игорь',
            age: 22,
            city: 'Москва',
            country: Country.Armenia,
            currency: Currency.EUR,
            username: 'Mjbaron',
        })).toEqual(errorsArr);
    });
    test('INCORRECT_AGE_DATA', async () => {
        const errorsArr = [ValidateProfileError.INCORRECT_AGE_DATA];

        expect(validateProfileData({
            first: 'Игорь',
            lastname: 'Горяный',
            city: 'Москва',
            country: Country.Armenia,
            currency: Currency.EUR,
            username: 'Mjbaron',
        })).toEqual(errorsArr);
    });

    test('INCORRECT_ALL', async () => {
        const errorsArr = [
            ValidateProfileError.INCORRECT_FULL_NAME_DATA,
            ValidateProfileError.INCORRECT_AGE_DATA,
            ValidateProfileError.INCORRECT_COUNTRY_DATA,
        ];

        expect(validateProfileData({
            city: 'Москва',
            currency: Currency.EUR,
            username: 'Mjbaron',
        })).toEqual(errorsArr);
    });

    test('NO_DATA', async () => {
        const errorsArr = [ValidateProfileError.NO_DATA];

        expect(validateProfileData()).toEqual(errorsArr);
    });
});
