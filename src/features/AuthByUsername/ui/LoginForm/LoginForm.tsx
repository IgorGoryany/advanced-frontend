import {
    FormEvent, memo, useCallback,
} from 'react';
import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button,
    ButtonTheme,
    Input,
    Text,
    TextTheme,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginFormPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginFormUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginAction, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo((props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginFormUsername);
    const password = useSelector(getLoginFormPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <form
                className={classNames(cls.loginForm, {}, [className])}
                onSubmit={onSubmit}
            >
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    type="submit"
                    theme={ButtonTheme.OUTLINED}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
