import { useAuth } from 'entities.entities/User';
import { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routePaths } from 'shared/config';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = useAuth();
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={routePaths.main} state={{ from: location }} replace />;
    }

    return children;
};
