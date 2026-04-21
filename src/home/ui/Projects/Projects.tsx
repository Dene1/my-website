import {ProjectList, SectionTitle} from "@components";
import styles from './_projects.module.scss'
import rect from "/icons/rect.svg";

export const Projects = () => (
    <>
      <SectionTitle title='projects'
                    href='/products'
                    content='View all ~~>' />
      <ProjectList />
      <img
        className={styles.rec}
        src={rect}
        alt='rec'
        loading='lazy' />
    </>
  )
;