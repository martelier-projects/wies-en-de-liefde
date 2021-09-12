import type { GetStaticProps } from 'next'

import type { SingleStore } from '../stores/single/interface'
import type { BandMemberStore } from '../stores/band-member/interface'
import type { GigStore } from '../stores/gig/interface'

import createGigStore, { GigContext } from '../stores/gig/store'
import createSingleStore, { SingleContext } from '../stores/single/store'
import createBandMemberStore, {
  BandMemberContext,
} from '../stores/band-member/store'

import { attributes } from '../content/pages/home.md'

import HeaderPromo from '../components/modules/HeaderPromo'
import FlexibleContent from '../components/modules/FlexibleContent'
import Seo from '../components/partials/Seo'
import BuyAlbum from '../components/flexibles/BuyAlbum'

import DefaultTemplate from '../templates/Default'

interface HomeInterface {
  singleStore: SingleStore
  bandMemberStore: BandMemberStore
  gigStore: GigStore
}

export default function Home({
  singleStore,
  bandMemberStore,
  gigStore,
}: HomeInterface) {
  const { sections, seo } = attributes

  return (
    <>
      <Seo {...seo} />
      <GigContext.Provider value={gigStore}>
        <BandMemberContext.Provider value={bandMemberStore}>
          <SingleContext.Provider value={singleStore}>
            <DefaultTemplate>
              <>
                <HeaderPromo />
                <FlexibleContent sections={sections} />
              </>
            </DefaultTemplate>
          </SingleContext.Provider>
        </BandMemberContext.Provider>
      </GigContext.Provider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const singleStore = await createSingleStore()
  const bandMemberStore = await createBandMemberStore()
  const gigStore = await createGigStore()

  return {
    props: {
      singleStore,
      bandMemberStore,
      gigStore,
    },
  }
}
