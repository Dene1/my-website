import styles from './_project-list.module.scss'
import {
  DisplayProjects
} from "./DisplayProjects/DisplayProjects.tsx";


export const ProjectList = () => {

  return (
    <div className={styles.carousel}>
      <div className={styles.group}>
        <DisplayProjects />
      </div>
      <div className={`${styles.group} aria-hidden`}>
        <DisplayProjects />
      </div>
      <div className={`${styles.group} aria-hidden`}>
        <DisplayProjects />
      </div>
    </div>
  )
}