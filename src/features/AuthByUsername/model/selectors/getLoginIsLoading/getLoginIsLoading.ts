import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLogin';

export const getLoginIsLoading = createSelector(getLoginForm, (loginForm) => loginForm.isLoading);
