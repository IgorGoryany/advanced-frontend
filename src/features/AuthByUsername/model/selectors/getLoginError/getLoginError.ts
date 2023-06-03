import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginError = createSelector(getLoginForm, (loginForm) => loginForm?.error);
