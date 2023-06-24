import React, {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch } from 'react-redux';
import { useAuth, userAction } from 'entities.entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useAuth();
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userAction.logout(USER_LOCALSTORAGE_KEY));
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
