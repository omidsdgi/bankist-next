import {useTheme} from "@/components/context/ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className= 'text-xl transition-transform hover:scale-110'  >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}

export default ThemeToggle;