import { ReactNode, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routePaths } from '@/shared/config';
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
        return <Navigate to={routePaths.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return (
            <Navigate to={routePaths.forbidden} state={{ from: location }} replace />
        );
    }

    return children;
};
