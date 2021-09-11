export default interface Footer {
  mainContent: {
    title: string
    text: string
  }

  foundation: {
    title: string
    items: [
      {
        label: string
        value: string
      }
    ]
  }

  newsletter: {
    title: string
    label: string
    submit: string
  }

  socialMedia: {
    facebookUrl: string
    instagramUrl: string
    spotifyUrl: string
    youTubeUrl: string
  }
}
