import styles from './Tags.module.scss'

export default function Tags() {
  return (
    <div className={styles.tags}>
      <p className={styles.tags__p}>filtre por tags:</p>
      <ul className={styles.tags__lista}>
        <li>Estrelas</li>
        <li>Galaxias</li>
        <li>Lua</li>
        <li>Planetas</li>
      </ul>
    </div>
  )
}