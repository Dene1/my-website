import styles from "./_contacts.module.scss";
import email from "/icons/email.svg";
import telegram from "/icons/telegram.svg";
import {CustomLink, SectionTitle} from "@/components";

export const Contacts = () => (
  <>
    <SectionTitle title='contacts' />

    <div className={styles.content}>
      <div className={styles.aboutMe}>
        <div className={styles.textContent}>
          I am interested in commercial experience. However, if you have any other requests or questions, do not hesitate to contact me.
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.title}>Message me here</div>

        <div className={styles.contactList}>
          <div className={styles.container}>
            <img className={styles.telegramIcon}
                 src={telegram}
                 loading='lazy'
                 alt='' />
            <CustomLink variant='linksContacts'
                        content='denel.dev'
                        href='https://web.telegram.org/a/' />
          </div>

          <div className={styles.container}>
            <img className={styles.emailIcon}
                 src={email}
                 loading='lazy'
                 alt='' />
            <CustomLink variant='linksContacts'
                        content='denel@gmail.com'
                        href='mailto:denel@gmail.com' />
          </div>
        </div>
      </div>
    </div>
  </>
)