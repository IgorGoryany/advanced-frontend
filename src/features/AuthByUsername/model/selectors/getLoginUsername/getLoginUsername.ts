import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginFormUsername = createSelector(getLoginForm, (loginForm) => loginForm?.username || '');
