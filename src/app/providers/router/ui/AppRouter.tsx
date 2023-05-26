import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config';
// import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    // const { t } = useTranslation();

    <Routes>
        {routerConfig.map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>

);
export { AppRouter };
