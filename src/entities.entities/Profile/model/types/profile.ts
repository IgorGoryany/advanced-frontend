import { Currency } from 'entities.entities/Currency';
import { Country } from 'entities.entities/Country';

export enum ValidateProfileError {
    INCORRECT_NAME_DATA = 'INCORRECT_NAME_DATA',
    INCORRECT_FULL_NAME_DATA = 'INCORRECT_FULL_NAME_DATA',
    INCORRECT_AGE_DATA = 'INCORRECT_AGE_DATA',
    INCORRECT_SECOND_NAME_DATA = 'INCORRECT_SECOND_NAME_DATA',
    INCORRECT_COUNTRY_DATA = 'INCORRECT_COUNTRY_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
    id?: number
}

export interface ProfileSchema {
    data?: Profile
    formData?: Profile
    isLoading: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileError[]
}
