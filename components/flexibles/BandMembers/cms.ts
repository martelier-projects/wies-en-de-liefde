import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Bandleden',
  name: 'band-members',
  widget: 'object',
  fields: [
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'band-members',
    },
  ],
}
