import styles from "./_quote.module.scss";

export const Quote = () => (
  <figure className={styles.quote}>
    <blockquote className={styles.quoteText}>
      With great power comes great electricity bill
    </blockquote>
    <figcaption className={styles.quoteAuthor}>
      Dr. Who
    </figcaption>
  </figure>
);