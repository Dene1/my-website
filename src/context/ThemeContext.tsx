import {createContext, useEffect, useMemo, useState} from 'react'
import type {ThemeProviderProps} from '@/context/types.ts'

type ThemeContextType = { theme: string; changeTheme: (t: string) => void };
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = ({children}: ThemeProviderProps) => {
	const [theme, setTheme] = useState(localStorage.getItem('appTheme') || 'dark')

	const changeTheme = () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')

	const value = useMemo(() => ({theme, changeTheme}), [theme])

	useEffect(() => {
		localStorage.setItem('appTheme', theme)
		document.body.classList.toggle('light', theme === 'light')
	}, [theme])

	return (
		<ThemeContext value={value}>
			{children}
		</ThemeContext>
	)
}

export default ThemeProvider