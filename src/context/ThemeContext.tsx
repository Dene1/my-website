import {createContext, useEffect, useMemo, useState} from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('appTheme') || 'dark');

  const changeTheme = () => setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")

  const value = useMemo(() => ({theme, changeTheme}), [theme]);

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
    document.body.classList.toggle('light');
  }, [theme]);

  return (
    <ThemeContext value={value}>
      {children}
    </ThemeContext>
  );
}

export default ThemeProvider;