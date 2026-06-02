import styles from './_content.module.scss'
import {About, Hero, Contacts, Projects, Skills} from '@/home/ui'

export const Content = () => {
	const content = [
		{id: 'hero', component: <Hero />},
		{id: 'projects', component: <Projects />},
		{id: 'skills', component: <Skills />},
		{id: 'about', component: <About />},
		{id: 'contacts', component: <Contacts />}
	]

	return <main className={styles.main}>
		{content.map((item, index) =>
			<section key={index}
			         id={item.id}
			         className={styles[item.id]}>
				{item.component}
			</section>
		)}
	</main>
}