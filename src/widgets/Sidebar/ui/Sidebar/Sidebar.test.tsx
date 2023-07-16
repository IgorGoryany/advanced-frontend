import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar.tsx', () => {
    test('test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('open');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('open');
    });
    //
    // test('with only first param', () => {
    //     // eslint-disable-next-line i18next/no-literal-string
    //     render(<Button>TEST</Button>);
    //     expect(screen.getByText('TEST')).toBeInTheDocument();
    // });
});
