import { act, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {
    componentRender,
} from '@/shared/lib/testing';

import { Sidebar } from './Sidebar';

describe('Sidebar.tsx', () => {
    test('test render', async () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', async () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        await act(async () => {
            await userEvent.click(toggleBtn);
        });
        expect(screen.getByTestId('sidebar')).toHaveClass('open');
        await act(async () => {
            await userEvent.click(toggleBtn);
        });
        expect(screen.getByTestId('sidebar')).not.toHaveClass('open');
    });
    //
    // test('with only first param', () => {
    //     // eslint-disable-next-line i18next/no-literal-string
    //     render(<Button>TEST</Button>);
    //     expect(screen.getByText('TEST')).toBeInTheDocument();
    // });
});
