import { useEffect } from 'react';
import useLocalStorage from "@/components/hooks/useLocalStorage";

type Theme = 'light' | 'dark' ;

export function useTheme() {
    const [theme, setTheme] = useLocalStorage<Theme>( 'light', 'dark' )

    useEffect(() => {
        document.documentElement.classList.toggle('dark' , theme === 'dark' );
    }, [theme]);

    function toggleTheme    () {
        setTheme(prev=> prev === 'dark' ? 'light' : 'dark');
    }

    return {
        theme,setTheme, toggleTheme,
    };
}