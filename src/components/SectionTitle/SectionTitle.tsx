import styles from "./_section-title.module.scss";
import {CustomLink} from "@components";

export const SectionTitle = ({title, content, href}: {
  title: string,
  content?: string,
  href?: string
}) => {

  if (href) {
    return (<div className={styles.title}>
      <h2 className={styles.titleText}>{title}</h2>
      <CustomLink variant='linksMain'
                  content={content}
                  href={href}>
      </CustomLink>
    </div>)
  }

  return (
    <div className={styles.title}>
      <h2 className={styles.titleText}>{title}</h2>
    </div>
  )
}