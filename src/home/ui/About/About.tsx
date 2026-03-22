import styles from "./_about.module.scss";
import dots from "/icons/dots5.svg";
import second from "/img/second-pirple.png";
import {CustomLink, SectionTitle} from "@components";


export const About = () => (
  <>
    <SectionTitle title='about-me' />

    <div className={styles.content}>

      <div className={styles.aboutMe}>
        <div className={styles.textContent}>
          <div className={styles.text}>
            Hello, i’m Ilya!
          </div>
          <div className={styles.text}>
            I’m a self-taught front-end developer based in Kazan, Russia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
          </div>
          <div className={styles.text}>
            Transforming my creativity and knowledge into a websites has been my passion for over two years. I always strive to learn about the newest technologies and frameworks.
          </div>
        </div>


        <CustomLink variant='linksButton'
                    content="Read more =>"
                    href="/about"></CustomLink>
      </div>

      <div className={styles.image__container}>
        <img className={styles.image}
             src={second}
             loading='lazy'
             alt='' />
        <img className={styles.dots}
             src={dots}
             loading='lazy'
             alt='' />
      </div>
    </div>
  </>
);