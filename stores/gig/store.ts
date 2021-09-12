import type Gig from '../../interfaces/Gig'
import type { GigStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let GigInstance: GigStore | null = null

export default function createGigStore() {
  if (!GigInstance) {
    GigInstance = createStore('content/gigs', 'venue')
  }

  return GigInstance
}

export const GigContext = contextFactory<Gig>()
