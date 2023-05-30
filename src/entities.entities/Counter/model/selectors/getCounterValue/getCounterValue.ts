import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities.entities/Counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
