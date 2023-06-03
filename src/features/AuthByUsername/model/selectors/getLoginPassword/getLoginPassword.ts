import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginFormPassword = createSelector(getLoginForm, (loginForm) => loginForm?.password || '');
