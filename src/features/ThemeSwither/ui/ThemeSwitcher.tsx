import React, { memo } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark1.svg?react';
import LightIcon from '@/shared/assets/icons/theme-light1.svg?react';
import { classNames, Theme, useTheme } from '../../../shared/lib';
import { Button } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon width={41} /> : <DarkIcon width={41} />}
        </Button>
    );
});
