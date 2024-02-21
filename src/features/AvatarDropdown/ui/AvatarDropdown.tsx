import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { User, isUserAdmin } from '@/entities/User';
import { routePaths } from '@/shared/config';
import {
    Avatar, Dropdown, DropdownItem,
} from '@/shared/ui';

interface AvatarDropdownProps {
  className?: string;
  onLogout: () => void;
  authData?: User
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className, onLogout, authData,
    } = props;
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);

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

    return (
        <Dropdown
            className={className}
            direction="bottom-left"
            trigger={<Avatar src={authData?.avatar} size={30} />}
            items={dropdownItems}
        />
    );
});
