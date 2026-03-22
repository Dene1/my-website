import styles from './_display-projects.module.scss'
import {CustomLink} from "@components";
import {projects} from "@/utils/projectData.ts";

export const DisplayProjects = () => {
  return (
    // <div className={styles.projectCards}>
    <>
      {projects.map((project) => (
        <div key={project.id}
             className={styles.project}>
          <img src={project.image}
               width={300}
               height={300}
               loading='lazy'
               alt={project.name}
               className={styles.projectImg} />

          <div className={styles.projectTechs}>
            {project.techs.map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectDescription}>{project.description}</div>
            <div className={styles.projectLinks}>
              <CustomLink href={project.links.github}
                          variant='linksButton'
                          content="Github =>"
                          className="button " />
              <CustomLink href={project.links.live}
                          variant='linksButton'
                          content="Live <~>"
                          className="button " />
            </div>
          </div>
        </div>
      ))}
    </>
    //</div>
  )
}