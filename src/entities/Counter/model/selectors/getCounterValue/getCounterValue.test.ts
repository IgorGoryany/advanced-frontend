import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return 10', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
