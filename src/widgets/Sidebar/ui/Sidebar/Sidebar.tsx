import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/ThemeSwither';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string | null
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, setOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.open]: open }, [className])}>
            <Button type="button" onClick={toggleSidebar}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitch} />
            </div>
        </div>
    );
};
