import Link from 'next/link'
import { useContext } from 'react'

import { GigContext } from '../../../stores/gig/store'

import styles from './styles.module.scss'

/**
 * Ensure the number is a double digit.
 * Example: 1 => 01 || 10 => 10
 */
const doubleDigit = (a: string) => (Number(a) <= 9 ? `0${a}` : a)

/**
 * Format the date from NL to EN.
 * @param date
 * @returns string
 */
const formatDate = (date: string) => {
  const splitYear = date.split('-')
  return `20${splitYear[2]}-${doubleDigit(splitYear[1])}-${doubleDigit(
    splitYear[0]
  )}`
}

export default function TourList() {
  const gigStore = useContext(GigContext)
  const gigs = gigStore.allIds
    .map(id => gigStore.byId[id])
    .map(item => ({
      ...item,
      calcDate: formatDate(item.date),
    }))
    .sort(
      (a, b) => new Date(a.calcDate).getTime() - new Date(b.calcDate).getTime()
    )

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
