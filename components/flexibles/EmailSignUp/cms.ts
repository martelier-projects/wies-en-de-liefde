import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Email sign up',
  name: 'email-sign-up',
  widget: 'object',
  summary: 'Email sign up | {{fields.title}}',
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
      label: 'Email label',
      name: 'emailLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Submit label',
      name: 'submitLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'email-sign-up',
    },
  ],
}
