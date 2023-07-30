import React, {
    FC, memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Avatar,
    Button, ButtonTheme, Dropdown, DropdownItem,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    isUserAdmin, isUserManager, useAuth, userAction,
} from 'entities.entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { routePaths } from 'shared/config';
import { getUserRole } from 'entities.entities/User/model/selectors/getUserRole';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useAuth();
    const dispatch = useDispatch();
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

    const dropdownItems = useMemo<DropdownItem<string>[]>(() => {
        if (isAdmin) {
            return [
                {
                    content: t('Админская панель'),
                    href: routePaths.admin_panel,
                },
                {
                    content: t('Профиль'),
                    href: routePaths.profile + authData?.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ];
        }
        return [
            {
                content: t('Профиль'),
                href: routePaths.profile + authData?.id,
            },
            {
                content: t('Выйти'),
                onClick: onLogout,
            },
        ];
    }, [authData?.id, isAdmin, onLogout, t]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Dropdown
                    direction="bottom-left"
                    className={cls.dropdown}
                    trigger={<Avatar src={authData.avatar} size={30} />}
                    items={dropdownItems}
                />
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
