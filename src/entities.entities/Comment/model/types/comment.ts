import { User } from 'entities.entities/User';

export interface Comment {
    id: number;
    user: User;
    text: string;
}
