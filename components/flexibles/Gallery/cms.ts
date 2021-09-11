import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Gallery',
  name: 'gallery',
  widget: 'object',
  fields: [
    {
      label: 'Gallery item',
      name: 'items',
      widget: 'list',
      summary: '{{fields.label}}',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Embed URL (Voor een video, alleen een URL meenemen)',
          name: 'embedUrl',
          widget: 'text',
          required: false,
        },
        {
          label: 'Beschrijving van de afbeelding/video',
          name: 'label',
          widget: 'text',
          required: false,
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'gallery',
    },
  ],
}
