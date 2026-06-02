import {SectionTitle} from '@components'
import dots5 from '/icons/dots5.svg'
import dots4 from '/icons/dots4.svg'
import rectangle from '/icons/rectangle.svg'
import styles from './_skills.module.scss'

interface Skills {
	id: number,
	name: string,
	items: string[],
}

const skillsList: Skills[] = [
	{id: 1, name: 'Languages', items: ['JavaScript', 'TypeScript']},
	{id: 2, name: 'Frameworks', items: ['React', 'Next', 'Express']},
	{id: 5, name: 'Tools', items: ['WebStorm', 'Figma', 'Git', 'Vite']},
	{id: 3, name: 'General', items: ['HTML', 'CSS', 'SASS', 'Tailwind']},
	{id: 4, name: 'Databases', items: ['MongoDB', 'Firebase']}
]

export const Skills = () => (
	<>
		<SectionTitle title="skills" />
		<div className={styles.content}>
			<div className={styles.illustrations}>

				<img className={`${styles.skillImage} ${styles.grid1}`}
				     src={dots5}
				     loading="lazy"
				     alt="" />

				<img className={`${styles.skillImage} ${styles.grid2}`}
				     src={rectangle}
				     loading="lazy"
				     alt="" />

				<img className={`${styles.skillImage} ${styles.grid3}`}
				     src={dots4}
				     loading="lazy"
				     alt="" />

				<img className={`${styles.skillImage} ${styles.grid4}`}
				     src={rectangle}
				     loading="lazy"
				     alt="" />
			</div>

			<div className={styles.skillsList}>
				{skillsList.map(item => (
					<div className={`${styles.skillBlock} ${styles[`grids${item.id}`]}`}
					     key={item.id}>
						<div className={styles.blockName}>{item.name}</div>
						<ul className={styles.skillBlockList}>
							{item.items.map((item, i) =>
								<li className={styles.skillBlockSkill}
								    key={i}>{item}</li>)}
						</ul>
					</div>))}
			</div>
		</div>
	</>
)