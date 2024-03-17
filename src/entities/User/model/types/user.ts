import { FeaturesFlags } from '@/shared/types';

export type UserRole = 'USER' | 'MANAGER' | 'ADMIN';

export interface User {
    id: number;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeaturesFlags;
}

export interface UserSchema {
    authData?: User;
    _mounted: boolean;
}
