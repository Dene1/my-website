import styles from './_about.module.scss'
import dots from '/icons/dots5.svg'
import dotss from '/icons/dotss.svg'
import second from '/img/second-pirple.png'
import rectangle from '/icons/rectangle.svg'
import {CustomLink, SectionTitle} from '@components'

export const About = () => (

	<div className={styles.content}>
		<div className={styles.aboutMe}>
			<SectionTitle title="about-me" />
			<p className={styles.textContent}>
				Hello, i’m Ilya!
				<br /><br />
				I’m a self-taught front-end developer based in Kazan, Russia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
				<br /><br />
				Transforming my creativity and knowledge into a websites has been my passion for over one years. I always strive to learn about the newest technologies and frameworks.
				<br />
			</p>

			<CustomLink variant="linksButton"
			            content="Read more =>"
			            href="/about"></CustomLink>
		</div>

		<div className={styles.image__container}>
			<img className={styles.dots1}
			     src={dotss}
			     loading="lazy"
			     alt="" />
			<img className={styles.image}
			     src={second}
			     loading="lazy"
			     alt="" />
			<img className={styles.dots}
			     src={dots}
			     loading="lazy"
			     alt="" />
		</div>
		<img className={styles.rectangle}
		     src={rectangle}
		     loading="lazy"
		     alt="" />
	</div>
)