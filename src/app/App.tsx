import { classNames, useTheme } from 'shared/lib';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} id="app">
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export { App };
