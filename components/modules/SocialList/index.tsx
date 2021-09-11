import type SocialListInterface from './interface'

import Facebook from '../../../public/icons/facebook.svg'
import Instagram from '../../../public/icons/instagram.svg'
import Spotify from '../../../public/icons/spotify.svg'
import YouTube from '../../../public/icons/you-tube.svg'

import styles from './styles.module.scss'

export default function SocialList({
  facebookUrl,
  instagramUrl,
  spotifyUrl,
  youTubeUrl,
}: SocialListInterface) {
  return (
    <div className={styles['container']}>
      <a className={styles['link']} href={facebookUrl}>
        <Facebook />
      </a>
      <a className={styles['link']} href={instagramUrl}>
        <Instagram />
      </a>
      <a className={styles['link']} href={spotifyUrl}>
        <Spotify />
      </a>
      <a className={styles['link']} href={youTubeUrl}>
        <YouTube />
      </a>
    </div>
  )
}
