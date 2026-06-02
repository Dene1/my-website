import {ProjectList, SectionTitle} from '@components'
import styles from './_projects.module.scss'

export const Projects = () => (
		<>
			<SectionTitle title="projects"
			              href="/products"
			              content="View all ~~>" />
			<ProjectList />
			{/* <img
        className={styles.rec}
        src={rect}
        alt='rec'
        loading='lazy' /> */}
			<span className={styles.rec}></span>
		</>
	)