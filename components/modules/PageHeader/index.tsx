import type PageHeaderInterface from './interface'

import styles from './styles.module.scss'

export default function PageHeader({
  title,
  img,
  imageOutline = 'center',
}: PageHeaderInterface) {
  return (
    <header className={styles['page-header']}>
      <div
        aria-hidden="true"
        className={styles['image']}
        style={{
          backgroundImage: `url(${img}?nf_resize=fit&w=1000)`,
          backgroundPosition: `${imageOutline}`,
        }}
      />

      <h1 className={styles['title']}>{title}</h1>
    </header>
  )
}
