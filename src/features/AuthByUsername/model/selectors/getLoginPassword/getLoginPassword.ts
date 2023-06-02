import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLogin';

export const getLoginFormPassword = createSelector(getLoginForm, (loginForm) => loginForm.password);
