import useDarkMode from "@/components/context/ThemeContext";

const ThemeToggle = () => {
const{isDark,toggleTheme}=useDarkMode()
    return (
        <button className='text-xl transition hover:scale-110' onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;