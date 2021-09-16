import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import MailIcon from '../../../public/icons/email.svg'

import type BuyAlbumInterface from './interface'

import styles from './styles.module.scss'

export default function BuyAlbum({ text, buyLabel }: BuyAlbumInterface) {
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
          <ReactMarkdown className={styles['content']}>{text}</ReactMarkdown>

          <Link href="mailto:info@wiesendeliefde.nl">
            <a className={styles['buy-album__link']}>
              {buyLabel}
              <span className={styles['buy-album__link-icon']}>
                <MailIcon />
              </span>
            </a>
          </Link>
        </figcaption>
      </figure>
    </div>
  )
}
