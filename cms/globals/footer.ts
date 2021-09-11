export default {
  label: 'Footer',
  name: 'footer',
  file: 'content/globals/footer.md',
  fields: [
    {
      label: 'Main info',
      name: 'mainContent',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'markdown',
          required: true,
          buttons: ['bold', 'italic', 'link'],
          editor_components: [],
          modes: ['rich_text'],
        },
      ],
    },

    {
      label: 'Stichting',
      name: 'foundation',
      widget: 'object',
      fields: [
        {
          label: 'Stichting titel',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Stichting titel',
          name: 'items',
          widget: 'list',
          fields: [
            {
              label: 'label',
              name: 'label',
              widget: 'string',
              required: true,
            },
            {
              label: 'value',
              name: 'value',
              widget: 'string',
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Nieuwsbrief',
      name: 'newsletter',
      widget: 'object',
      fields: [
        {
          label: 'Nieuwsbrief titel',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Label',
          name: 'label',
          widget: 'string',
          required: true,
        },
        {
          label: 'Submit knop',
          name: 'submit',
          widget: 'string',
          required: true,
        },
      ],
    },
    {
      label: 'Social media',
      name: 'socialMedia',
      widget: 'object',
      fields: [
        {
          label: 'Facebook url',
          name: 'facebookUrl',
          widget: 'string',
          required: true,
        },
        {
          label: 'Instagram url',
          name: 'instagramUrl',
          widget: 'string',
          required: true,
        },
        {
          label: 'Spotify url',
          name: 'spotifyUrl',
          widget: 'string',
          required: true,
        },
        {
          label: 'YouTube url',
          name: 'youTubeUrl',
          widget: 'string',
          required: true,
        },
      ],
    },
  ],
}
