import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUserRole = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRole, (roles) => Boolean(roles?.includes('ADMIN')));
export const isUserManager = createSelector(getUserRole, (roles) => Boolean(roles?.includes('MANAGER')));
