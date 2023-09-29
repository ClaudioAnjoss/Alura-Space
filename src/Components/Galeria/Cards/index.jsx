import open from 'assets/open.png'
import favorito from 'assets/favorito.png'

export default function Cards({ itens, styles }) {
  console.log(itens)
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={open} alt="icone coracao de curtir" />
                <img src={favorito} alt="icone de abrir modal" />
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
