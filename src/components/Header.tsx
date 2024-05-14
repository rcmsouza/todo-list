import styles from './Header.module.css'
import RocketLogo from '../assets/rocket.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={RocketLogo} alt="Logo foguete" />
      <p><span>to</span>do</p>
    </header>
  )
}