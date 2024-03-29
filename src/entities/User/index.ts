export { useAuth } from './lib/hooks/useAuth';
export {
    userAction,
    userReducer,
} from './model/slice/userSlice';
export type {
    User,
    UserSchema,
    UserRole,
} from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
export { isUserAdmin, isUserManager, getUserRole } from './model/selectors/getUserRole';
