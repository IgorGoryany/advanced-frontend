import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginUsername = createSelector(getLoginForm, (loginForm) => loginForm?.username || '');
