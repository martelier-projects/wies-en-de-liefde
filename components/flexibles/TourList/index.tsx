import Link from 'next/link'
import { useContext } from 'react'

import { GigContext } from '../../../stores/gig/store'

import styles from './styles.module.scss'

/**
 * Format the date from NL to EN.
 * @param date
 * @returns string
 */
const formatDate = (date: string) => {
  const splitYear = date.split('-')
  return `20${splitYear[2]}-${splitYear[1]}-${splitYear[0]}`
}

export default function TourList() {
  const gigStore = useContext(GigContext)
  const gigs = gigStore.allIds
    .map(id => gigStore.byId[id])
    .map(item => ({
      ...item,
      calcDate: formatDate(item.date),
    }))
    .sort((a, b) => {
      if (new Date(b.calcDate) > new Date(a.calcDate)) return -1
      if (new Date(b.calcDate) < new Date(a.calcDate)) return 1
      return 0
    })

  return (
    <div className={styles['tour-list']}>
      <ul className={styles['tour-list__list']}>
        {gigs.map((item, index) => {
          const inner = (
            <p className={styles['tour-list__text']}>
              <time
                className={styles['tour-list__date']}
                dateTime={item.calcDate}
              >
                {item.date}
              </time>
              <span className={styles['tour-list__location']}>
                <span className={styles['tour-list__venue']}>{item.venue}</span>
                {` `}
                <span className={styles['tour-list__place']}>{item.place}</span>
              </span>
            </p>
          )

          return (
            <li key={`${item.venue}-${index}`}>
              {item.url ? (
                <Link href={item.url}>
                  <a className={styles['tour-list__link']}>{inner}</a>
                </Link>
              ) : (
                inner
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
