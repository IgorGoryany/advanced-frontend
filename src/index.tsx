import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import '@/shared/config';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

// render(<App tab="home" />, container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
