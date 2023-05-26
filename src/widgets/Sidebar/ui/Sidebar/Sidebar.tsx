import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/ThemeSwither';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string | null
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, setOpen] = useState<boolean>(true);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.open]: open }, [className])}
        >
            <Button
                data-testid="toggle"
                type="button"
                onClick={toggleSidebar}
            >
                {t('toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitch} />
            </div>
        </div>
    );
};
