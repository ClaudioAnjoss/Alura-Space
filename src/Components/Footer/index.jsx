import facebook from 'assets/facebook.svg'
import instagram from 'assets/instagram.svg'
import twitter from 'assets/twitter.svg'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="#">
          <img src={facebook} alt="Icone Facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="Icone Instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="Icone Twitter" />
        </a>
      </div>
      <p>Desenvolvido por Claudio Anjos</p>
    </footer>
  )
}
