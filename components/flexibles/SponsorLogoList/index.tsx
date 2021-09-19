import type SponsorLogoListInterface from './interface'

import styles from './styles.module.scss'

export default function SponsorLogoList({
  title,
  text,
  logos,
}: SponsorLogoListInterface) {
  return (
    <section className={styles['sponsor-logo-list']}>
      {title && <h2 className={styles['sponsor-logo-list__title']}>{title}</h2>}
      <figure className={styles['sponsor-logo-list__image-container']}>
        {logos.map(logo => (
          <img
            key={logo.alt}
            src={logo.image}
            alt={logo.alt}
            className={styles['sponsor-logo-list__image']}
          />
        ))}
      </figure>

      <p className={styles['sponsor-logo-list__text']}>{text}</p>
    </section>
  )
}
