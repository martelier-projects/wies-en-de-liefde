export default {
  label: 'Column text',
  name: 'column-text',
  widget: 'object',
  summary: 'Column text | {{fields.title}}',
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
      buttons: [],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Enable Horizontal view',
      name: 'horizontal',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'column-text',
    },
  ],
}
