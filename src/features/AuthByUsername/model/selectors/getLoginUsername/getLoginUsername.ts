import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLogin';

export const getLoginFormUsername = createSelector(getLoginForm, (loginForm) => loginForm.username);
