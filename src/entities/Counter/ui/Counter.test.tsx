import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter.tsx', () => {
    test('test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test increment', () => {
    // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const increment = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        fireEvent.click(increment);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('test decrement', () => {
    // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrement = screen.getByTestId('decrement-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        fireEvent.click(decrement);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
