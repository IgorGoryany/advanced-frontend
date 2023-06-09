import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
