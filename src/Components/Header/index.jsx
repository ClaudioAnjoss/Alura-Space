import Logo from 'assets/logo.png'
import Search from 'assets/search.png'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={Logo} alt="Logo Alura Space" />
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder="O que voce Procura"
        />
        <img src={Search} alt="Icone de lupa" />
      </div>
    </header>
  )
}
