import styles from './_header.module.scss'
import {CustomLink, IconButton} from "@components";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Link, useLocation} from "wouter";

const links = [
  {title: 'about', href: 'about'},
  {title: 'projects', href: 'projects'},
  {title: 'skills', href: 'skills'},
  {title: 'contacts', href: 'contacts'},
]

const media = [
  {title: 'github', to: 'https://github.com/Dene1', src: '/icons/github.svg'},
  {title: 'telegram', to: 'https://web.telegram.org/a/', src: '/icons/telegram.svg'},
  {title: 'email', to: 'mailto:denel@gmail.com', src: '/icons/email.svg'},
  {title: 'figma', to: '/', src: '/icons/figma.svg'},
]

export const Header = () => {
  const {t, i18n} = useTranslation()
  const [location] = useLocation();
  console.log("Текущий путь:", location);
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage)
    setLang(newLanguage)
  }

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  const [lang, setLang] = useState('en')

  const isLinkActive = (href: string) => {
    const path = `/${href}`;
    if (path === '/about' && location === '/') return true;
    return location === path;
  }

  return (
    <header className={styles.header}>
        <div className={styles.header__media}>
          <span className={styles.header__media__line}></span>
          {media.map((item, i) => (
            <a key={i}
               className={styles.header__media__link}
               href={item.to}
               target="_blank"
               rel="noopener noreferrer">
              <img
                src={item.src}
                loading='lazy'
                alt="githab logo"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        <div className={styles.header__content}>
          <Link className={styles.header__logo}
                href='#'>
            Denel
          </Link>

          <div className={styles.header__container}>
            <ul className={styles.header__nav}>
              {links.map((link) => (
                <li key={link.title}>
                  <CustomLink
                    variant='linksHeader'
                    content={link.title}
                    href={link.href}
                    onClick={e => handleClick(e, link.href)}
                    isActive={isLinkActive(link.href)}
                  />
                </li>
              ))}
            </ul>

            <div className={styles.container}>
              <IconButton type='ThemeToggle' />
              <IconButton type='Globe' />
            </div>

          </div>
        </div>
    </header>
  )
}