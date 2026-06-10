import useDarkMode from "@/components/context/ThemeContext";

export function ThemeToggle() {
    const { isDark, toggleTheme, mounted } = useDarkMode();

    if (!mounted) return null;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className= 'text-xl transition-transform hover:scale-110'        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}

export default ThemeToggle;