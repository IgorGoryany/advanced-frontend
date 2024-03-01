import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { componentRender } from '@/shared/lib/testing';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: 1,
    age: 495,
    first: 'admin',
    lastname: 'admin',
    username: 'admin',
    country: Country.Belarus,
    currency: Currency.USD,
    avatar: 'asdasd',
    city: 'Egrek',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            formData: profile,
        },
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    beforeEach(async () => {
        componentRender(
            <EditableProfileCard id="1" />,
            options,
        );
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        });
    });
    test('switch readonly mode to false', async () => {
        expect(screen.getByTestId('EditableProfileCardHeader.CancelEditButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.SaveEditButton')).toBeInTheDocument();
    });

    test('switch readonly mode to true', async () => {
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelEditButton'));
        });
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
    });

    test('return to initial value in username input when click CancelEditButton', async () => {
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.username'));
        });
        // @ts-ignore
        expect(screen.getByTestId('ProfileCard.username').value).toBe('');
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelEditButton'));
        });
        // @ts-ignore
        expect(screen.getByTestId('ProfileCard.username').value).toBe('admin');
    });

    test('input new value', async () => {
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.username'));
        });
        await act(async () => {
            await userEvent.type(screen.getByTestId('ProfileCard.username'), 'user');
        });
        expect(screen.getByTestId('ProfileCard.username')).toHaveValue('user');
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelEditButton'));
        });
        expect(screen.getByTestId('ProfileCard.username')).toHaveValue('admin');
    });

    test('validation age', async () => {
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.age'));
        });
        await act(async () => {
            await userEvent.type(screen.getByTestId('ProfileCard.age'), 'user');
        });
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue('0');
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelEditButton'));
        });
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue('495');
    });
    test('validation error', async () => {
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.age'));
        });
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveEditButton'));
        });
        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toHaveTextContent('Heкорректный возраст');
    });
    test('no validation error and send PUT request', async () => {
        // TODO реши проблему с axiosApi
        // const mockedApi = jest.spyOn(axiosApi, 'put');
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.username'));
        });
        await act(async () => {
            await userEvent.type(screen.getByTestId('ProfileCard.username'), 'user');
        });
        expect(screen.getByTestId('ProfileCard.username')).toHaveValue('user');
        await act(async () => {
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveEditButton'));
        });
        expect(screen.getByTestId('ProfileCard.username')).toHaveValue('user');
        // expect(mockedApi).toHaveBeenCalled();
    });
});
