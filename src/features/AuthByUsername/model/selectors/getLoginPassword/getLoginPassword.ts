import { createSelector } from '@reduxjs/toolkit';

import { getLoginForm } from '../getLogin/getLoginForm';

export const getLoginPassword = createSelector(getLoginForm, (loginForm) => loginForm?.password || '');
