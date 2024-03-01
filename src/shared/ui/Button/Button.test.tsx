import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button.tsx', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    // test('with only first param', () => {
    //     // eslint-disable-next-line i18next/no-literal-string
    //     render(<Button>TEST</Button>);
    //     expect(screen.getByText('TEST')).toBeInTheDocument();
    // });
    //
    // test('with only first param', () => {
    //     // eslint-disable-next-line i18next/no-literal-string
    //     render(<Button>TEST</Button>);
    //     expect(screen.getByText('TEST')).toBeInTheDocument();
    // });
});
