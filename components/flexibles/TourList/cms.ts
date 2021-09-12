import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Tour list',
  name: 'tour-list',
  widget: 'object',
  summary: 'Tour list ',
  fields: [
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'tour-list',
    },
  ],
}
