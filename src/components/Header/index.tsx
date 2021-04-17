import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <a>Home</a>
        <a>Posts</a>
      </div>
    </header>
  )
}