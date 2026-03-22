import styles from './_footer.module.scss'

export const Footer = () => {
  return (
    <footer id='contacts'
            className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__content}>
          <div className={styles.footer__contentLogo}>
            <a className={styles.footer__logo}>
              Denel
            </a>

            <div>denel@gmail.com</div>
          </div>

          <div className={styles.footer__specialty}>
            Front-end developer
          </div>
        </div>

        <div className={styles.footer__media}>
          <div className={styles.footer__media__text}>Media</div>

          <div className={styles.footer__media__links}>
            <a className={styles.footer__media__link}
               href='https://github.com/Dene1'
               target="_blank"
               rel="noopener noreferrer">
              <img
                className={styles.footer__media__icon}
                src="/icons/github.svg"
                alt="githab logo"
                width={20}
                height={20}
              />
            </a>

            <a className={styles.footer__media__link}
               href='https://web.telegram.org/a/'
               target="_blank"
               rel="noopener noreferrer">
              <img
                className={styles.footer__media__icon}
                src="/icons/telegram.svg"
                alt="telegram logo"
                width={20}
                height={20}
              />
            </a>

            <a className={styles.footer__media__link}
               href='/'
               target="_blank"
               rel="noopener noreferrer">
              <img
                className={styles.footer__media__icon}
                src="/icons/figma.svg"
                alt="figma logo"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        © Copyright 2025. Made by Denel
      </div>
    </footer>
  )
}