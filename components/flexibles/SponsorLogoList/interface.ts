interface Logo {
  image: string
  alt: string
}

export default interface SponsorLogoList {
  title: string
  text: string
  logos: Logo[]
}
