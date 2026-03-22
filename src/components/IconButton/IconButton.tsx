import {Moon, Sun} from "lucide-react"
import {Globe} from "lucide-react";
import styles from "./_icon-button.module.scss"
import {useContext} from "react";
import {ThemeContext} from "@/context/ThemeContext.tsx";

export function IconButton({type, size = 16}: { type: string, size?: number }) {
  const {theme, changeTheme} = useContext(ThemeContext)

  const handleClick = () => {
    if (type === 'ThemeToggle') {
      changeTheme()
    }
  }

  const renderIcon = () => {
    switch (type) {
      case 'ThemeToggle':
        return theme === 'dark' ? <Sun size={size} /> : <Moon size={size} />
      case 'Globe':
        return <Globe size={size} />
      default:
        return null
    }
  }

  return (
    <button className={styles.button}
            onClick={handleClick}>
      {renderIcon()}
    </button>
  )
}