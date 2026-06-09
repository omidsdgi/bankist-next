import {useEffect, useState} from "react";

const useDarkMode = () => {
    const[isDark, setIsDark] = useState(()=>{
        if (typeof window === "undefined") return false;
        return localStorage.getItem('theme')=== 'dark';
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark',isDark);
        localStorage.setItem('theme',isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prevState => !prevState);
    }
    return (
        {isDark ,toggleTheme}
    );
};

export default useDarkMode;