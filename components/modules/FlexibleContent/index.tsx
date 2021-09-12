import type FlexibleContentInterface from './interface'

import ColumnText from '../../flexibles/ColumnText'
import VideoEmbed from '../../flexibles/VideoEmbed'
import Playlist from '../../flexibles/Playlist'
import BandMembers from '../../flexibles/BandMembers'
import Text from '../../flexibles/Text'
import Images from '../../flexibles/Images'
import Gallery from '../../flexibles/Gallery'
import TourList from '../../flexibles/TourList'
import BuyAlbum from '../../flexibles/BuyAlbum'

import styles from './styles.module.scss'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <div className={styles['container']}>
      {sections.map((section, index) => {
        if (section.component === 'text') {
          return <Text key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'column-text') {
          return <ColumnText key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'video-embed') {
          return <VideoEmbed key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'playlist') {
          return <Playlist key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'band-members') {
          return <BandMembers key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'images') {
          return <Images key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'gallery') {
          return <Gallery key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'tour-list') {
          return <TourList key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'buy-album') {
          return <BuyAlbum key={`flexible-content-${index}`} {...section} />
        }
        return null
      })}
    </div>
  )
}
