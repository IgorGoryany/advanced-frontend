import { CounterSchema } from 'entities.entities/Counter';
import { UserSchema } from 'entities.entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
