import styles from "./_hero.module.scss";
import dots from "/icons/dots5.svg";
import main from "/img/main-pirple.png";
import {CustomLink} from "@components";


export const Hero = () => (
  <>
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        Ilya is a <span>front-end</span> developer
      </h1>
      <div className={styles.heroDescription}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <CustomLink variant='linksButton'
                  content="Contact ME =>"
                  href="/contacts"></CustomLink>
    </div>

    {/*<Image className={styles.logo}*/}
    {/*       src={logo}*/}
    {/*       loading='lazy'*/}
    {/*       alt='' />*/}

    <div className={styles.heroIllustration}>
      <img className={styles.heroImage}
           src={main}
           loading='lazy'
           alt='' />


      <div className={styles.heroStatus}>
        Open for new opportunities
      </div>

      <img className={styles.dots}
           src={dots}
           loading='lazy'
           alt='' />
    </div>
  </>
);