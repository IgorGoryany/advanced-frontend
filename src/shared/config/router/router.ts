import { RouteProps } from 'react-router-dom';
import { UserRole } from 'entities.entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',

    //! last
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'notFound',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ADMIN_PANEL]: '/admin_panel',
    [AppRoutes.FORBIDDEN]: '/forbidden',

    //! last
    [AppRoutes.NOT_FOUND]: '*',
};
