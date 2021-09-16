import { useContext } from 'react'

import type PlaylistInterface from './interface'

import { SingleContext } from '../../../stores/single/store'

import AppleMusic from '../../../public/icons/apple-music.svg'
import Deezer from '../../../public/icons/deezer.svg'
import Spotify from '../../../public/icons/spotify.svg'

import styles from './styles.module.scss'

export default function PlayList({ title }: PlaylistInterface) {
  const singleStore = useContext(SingleContext)
  const singles = singleStore.allIds.map(id => singleStore.byId[id])

  return (
    <div className={styles['container']}>
      <div className={styles['playlist']}>
        <h2 className={styles['title']}>{title}</h2>

        <div className={styles['player']}>
          <ol className={styles['playlist__list']}>
            {singles.map(song => (
              <li key={song.title} className={styles['playlist__item']}>
                <span className={styles['playlist__text']}>{song.title}</span>

                <div className={styles['playlist__streams']}>
                  {song.spotifyUrl && (
                    <a
                      className={styles['playlist__stream']}
                      href={song.spotifyUrl}
                    >
                      <Spotify />
                    </a>
                  )}
                  {song.appleMusicUrl && (
                    <a
                      className={styles['playlist__stream']}
                      href={song.appleMusicUrl}
                    >
                      <AppleMusic />
                    </a>
                  )}

                  {song.deezerUrl && (
                    <a
                      className={styles['playlist__stream']}
                      href={song.deezerUrl}
                    >
                      <Deezer />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles['playlist__background']} />
      </div>
    </div>
  )
}
