import type BuyAlbumInterface from './interface'

import styles from './styles.module.scss'

export default function BuyAlbum({ children }: BuyAlbumInterface) {
  return (
    <div className={styles['buy-album']}>
      <figure className={styles['buy-album__inner']}>
        <div className={styles['buy-album__image-container']}>
          <img
            className={styles['buy-album__image']}
            src="/images/cd-voorkant.png"
            alt="Voorkant van de CD hoes van Zonderdagen"
          />
          <img
            className={styles['buy-album__image']}
            src="/images/cd-achterkant.png"
            alt="Achterkant van de CD hoes van Zonderdagen"
          />
        </div>

        <figcaption className={styles['buy-album__caption']}>
          <p>
            Koop hier het debuutalbum ZonderDagen van Wies en de Liefde. Als je
            ons een mailtje stuurt, ontvang je een betaallink en de CD in je
            brievenbus.
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
