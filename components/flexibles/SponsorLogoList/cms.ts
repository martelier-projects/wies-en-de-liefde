import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Sponsor logo list',
  name: 'sponsor-logo-list',
  widget: 'object',
  summary: 'Sponsor logo list | {{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'text',
      required: false,
    },
    {
      label: 'Sponsor logos',
      name: 'logos',
      widget: 'list',
      summary: 'Logo van {{fields.alt}}',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: true,
        },
        {
          label: 'Sponsor naam (gebruikt als alt text)',
          name: 'alt',
          widget: 'string',
          required: true,
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'sponsor-logo-list',
    },
  ],
}
