import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('загрузка...')}</div>}>
            <Routes>
                {routerConfig.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export { AppRouter };
