import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Buy album',
  name: 'buy-album',
  widget: 'object',
  summary: 'Buy album',
  fields: [
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: ['bold', 'italic', 'link'],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Buy label',
      name: 'buyLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'buy-album',
    },
  ],
}
