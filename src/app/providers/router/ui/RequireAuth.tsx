import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getForbiddenRoute, getMainRoute } from '@/shared/config';
import { getUserRole, useAuth, UserRole } from '@/entities/User';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const user = useAuth();
    const location = useLocation();
    const userRoles = useSelector(getUserRole);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requireRole) => userRoles?.includes(requireRole));
    }, [roles, userRoles]);

    if (!user) {
        return <Navigate to={getMainRoute()} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return (
            <Navigate to={getForbiddenRoute()} state={{ from: location }} replace />
        );
    }

    return children;
};
