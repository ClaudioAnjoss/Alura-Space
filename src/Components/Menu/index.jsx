import styles from './Menu.module.scss'
import Inicio from '../../assets/icones/home-ativo.png'
import Curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import Visita from '../../assets/icones/mais-vistas-inativo.png'
import Surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import Novas from '../../assets/icones/novas-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img className={styles.menu__img} src={Inicio} alt="Icone Inicio" />
          <a className={styles.menu__a} href="">
            Inicio
          </a>
        </li>
        <li className={styles.menu__item}>
          <img
            className={styles.menu__img}
            src={Visita}
            alt="Icone Mais vistas"
          />
          <a className={styles.menu__a} href="">
            Mais vistas
          </a>
        </li>
        <li className={styles.menu__item}>
          <img
            className={styles.menu__img}
            src={Curtidas}
            alt="Icone Mais curtidas"
          />
          <a className={styles.menu__a} href="">
            Mais curtidas
          </a>
        </li>
        <li className={styles.menu__item}>
          <img className={styles.menu__img} src={Novas} alt="Icone Novas" />
          <a className={styles.menu__a} href="">
            Novas
          </a>
        </li>
        <li className={styles.menu__item}>
          <img
            className={styles.menu__img}
            src={Surpreenda}
            alt="Icone Surpreenda-me"
          />
          <a href="">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
