import {useEffect, useState} from "react";
const themes = {
    light: 'light',
    dark: 'dark',
} as const;

type Theme = keyof typeof themes;

export function useDarkMode() {
 const [theme, setTheme] = useState<Theme>(themes.light);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;

        if (storedTheme && Object.values(themes).includes(storedTheme)) {
            setTheme(storedTheme);
        }

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const isDark = theme === themes.dark;

        document.documentElement.classList.toggle('dark', isDark);

        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prev =>
            prev === themes.light ? themes.dark : themes.light
        );
    };

    return {
        theme,
        isDark: theme === themes.dark,
        toggleTheme,
        mounted,
    };
}

export default useDarkMode;