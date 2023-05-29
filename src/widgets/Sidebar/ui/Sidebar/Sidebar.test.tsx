import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar.tsx', () => {
    test('test render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        // eslint-disable-next-line i18next/no-literal-string
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('open');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('open');
    });
    //
    // test('with only first param', () => {
    //     // eslint-disable-next-line i18next/no-literal-string
    //     render(<Button>TEST</Button>);
    //     expect(screen.getByText('TEST')).toBeInTheDocument();
    // });
});
