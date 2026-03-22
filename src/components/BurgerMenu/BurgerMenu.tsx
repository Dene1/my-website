import styles from './_burger-menu.module.scss'

export function BurgerMenu({
                             title = 'button',
                             type = 'button',

                             ...props
                           }) {

  return (
    <div className={styles.burger}
         {...props}>{title}</div>
  );
}