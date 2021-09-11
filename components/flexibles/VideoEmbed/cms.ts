import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Video embed',
  name: 'video-embed',
  widget: 'object',
  fields: [
    {
      label: 'Location',
      name: 'location',
      widget: 'select',
      options: ['left', 'center', 'right'],
      default: ['right'],
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Source',
      name: 'source',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'video-embed',
    },
  ],
}
