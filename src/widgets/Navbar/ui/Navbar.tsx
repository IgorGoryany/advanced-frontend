import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from '@/shared/lib';
import {
    Button, ButtonTheme, HStack,
} from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';
import { useAuth, userAction } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useAppDispatch();
    const authData = useAuth();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
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
