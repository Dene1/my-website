import styles from './_contacts.module.scss'
import email from '/icons/email.svg'
import telegram from '/icons/telegram.svg'
import {CustomLink, SectionTitle} from '@/components'

export const Contacts = () => (
	<>
		<SectionTitle title="contacts" />

		<div className={styles.content}>
			<div className={styles.aboutMe}>
				I am interested in commercial experience. However, <br />if you have any other requests or questions, do not <br />hesitate to contact me.
			</div>

			<div className={styles.contactContainer}>
				<div className={styles.title}>Message me here</div>

				<div className={styles.contactList}>
					<div className={styles.container}>
						<img className={styles.telegramIcon}
						     src={telegram}
						     loading="lazy"
						     alt="" />
						<CustomLink variant="linksContacts"
						            content="denel.dev"
						            href="https://web.telegram.org/a/" />
					</div>

					<div className={styles.container}>
						<img className={styles.emailIcon}
						     src={email}
						     loading="lazy"
						     alt="" />
						<CustomLink variant="linksContacts"
						            content="denel@denel.me"
						            href="mailto:denel@gmail.com" />
					</div>
				</div>
			</div>
		</div>
	</>
)