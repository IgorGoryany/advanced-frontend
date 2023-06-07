import { Profile, ValidateProfileError } from 'entities.entities/Profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        lastname, first, age, country,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!first && !lastname) {
        errors.push(ValidateProfileError.INCORRECT_FULL_NAME_DATA);
    } else {
        if (!first) {
            errors.push(ValidateProfileError.INCORRECT_NAME_DATA);
        }

        if (!lastname) {
            errors.push(ValidateProfileError.INCORRECT_SECOND_NAME_DATA);
        }
    }

    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE_DATA);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY_DATA);
    }

    return errors;
};
