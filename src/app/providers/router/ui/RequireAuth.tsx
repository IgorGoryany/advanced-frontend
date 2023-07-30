import { getUserRole, useAuth, UserRole } from 'entities.entities/User';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routePaths } from 'shared/config';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const user = useAuth();
    const location = useLocation();
    const { t } = useTranslation();
    const userRoles = useSelector(getUserRole);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requireRole) => userRoles?.includes(requireRole));
    }, [roles, userRoles]);

    if (!user) {
        return <Navigate to={routePaths.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return (
            <Navigate to={routePaths.forbidden} state={{ from: location }} replace />
        );
    }

    return children;
};
