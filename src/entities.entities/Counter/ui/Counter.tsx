import { FC } from 'react';
import { Button } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCounterValue,
} from 'entities.entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterAction } from '../model/slice/counterSlice';

interface CounterProps {
}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    function increment() {
        dispatch(counterAction.increment());
    }

    function decrement() {
        dispatch(counterAction.decrement());
    }

    return (
        <div>
            {/* eslint-disable-next-line */}
            <h1 data-testid="value-title">
                value =
                {' '}
                {counterValue}
            </h1>
            {/* eslint-disable-next-line */}
            <Button data-testid="increment-btn" onClick={increment}>increment</Button>
            {/* eslint-disable-next-line */}
            <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};
