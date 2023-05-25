import React, { FC } from 'react';
import { classNames, Theme, useTheme } from 'shared/lib';
import DarkIcon from 'shared/assets/icons/theme-dark1.svg';
import LightIcon from 'shared/assets/icons/theme-light1.svg';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon width={41} /> : <DarkIcon width={41} />}
        </Button>
    );
};
