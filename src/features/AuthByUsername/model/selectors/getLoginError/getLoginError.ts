import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLogin';

export const getLoginError = createSelector(getLoginForm, (loginForm) => loginForm?.error || null);
