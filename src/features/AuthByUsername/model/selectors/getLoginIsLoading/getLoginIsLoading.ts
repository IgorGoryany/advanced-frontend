import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginIsLoading = createSelector(getLoginForm, (loginForm) => loginForm?.isLoading || false);
