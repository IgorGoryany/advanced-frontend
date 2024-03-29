import React, {
    ReactNode, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/shared/lib';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
