import Menu from '../../Components/Menu'
import Header from '../../Components/Header'
import Banner from '../../assets/banner.png'
import styles from './PaginaInicial.module.scss'
import Galeria from '../../Components/Galeria'
import Populares from '../../Components/Populares'

export default function PaginaInical() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaco</h1>
            <img src={Banner} alt="A imagem da terra vista do espaco" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
    </>
  )
}
