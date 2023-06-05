import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config';
import { PageLoader } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities.entities/User';

const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routerConfig.filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Routes>
            {routes.map(({
                element,
                path,
            }) => (
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
});
export { AppRouter };
