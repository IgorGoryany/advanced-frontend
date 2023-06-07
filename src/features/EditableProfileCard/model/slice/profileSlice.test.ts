import { ProfileSchema } from 'entities.entities/Profile';
import { profileAction, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(state as ProfileSchema, profileAction.setReadonly(true)),
        )
            .toEqual({
                readonly: true,
            });
    });

    test('edit username and age', () => {
        const state: DeepPartial<ProfileSchema> = {
            formData: {
                username: 'asdasd',
                age: 23,
            },
        };
        expect(
            profileReducer(state as ProfileSchema, profileAction.editForm({
                username: 'lsls',
                age: 28,
            })),
        )
            .toEqual({
                formData: {
                    username: 'lsls',
                    age: 28,
                },
            });
    });
});
