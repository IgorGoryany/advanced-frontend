import React, { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark1.svg';
import LightIcon from '@/shared/assets/icons/theme-light1.svg';

import { classNames, Theme, useTheme } from '../../../shared/lib';
import { Button } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            data-testid="ThemeSwitcher"
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon width={41} /> : <DarkIcon width={41} />}
        </Button>
    );
});
