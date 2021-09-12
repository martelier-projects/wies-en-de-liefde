import ReactMarkdown from 'react-markdown'
import type ColumnTextInterface from './interface'

import styles from './styles.module.scss'

export default function ColumnText({
  title,
  text,
  horizontal = false,
}: ColumnTextInterface) {
  return (
    <div className={styles['container']}>
      <section className={styles['column-text']} data-horizontal={horizontal}>
        {title && <h2 className={styles['column-text__title']}>{title}</h2>}

        <div className={styles['column-text__texts']}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}
