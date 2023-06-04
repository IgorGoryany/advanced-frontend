import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'shared/config';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
