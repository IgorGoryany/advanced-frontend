import {
    FC, memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, DropdownItem, HStack,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { isUserAdmin, useAuth, userAction } from 'entities.entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { routePaths } from 'shared/config';
import { redirect } from 'react-router-dom';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useAuth();
    const isAdmin = useSelector(isUserAdmin);

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

    const classes = classNames(cls.navbar, {}, [className]);

    if (authData) {
        return (
            <header className={classes}>
                <HStack gap={16} className={cls.items}>
                    <NotificationButton />
                    <AvatarDropdown
                        authData={authData}
                        onLogout={onLogout}
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classes}>
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
