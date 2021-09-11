import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Images',
  name: 'images',
  widget: 'object',
  fields: [
    {
      label: 'First image',
      name: 'imageOne',
      widget: 'image',
      allow_multiple: false,
      hint: 'Gebruik een horizontale afbeelding',
      required: true,
    },
    {
      label: 'second image',
      name: 'imageTwo',
      widget: 'image',
      allow_multiple: false,
      hint: 'Gebruik een verticale afbeelding',
      required: true,
    },
    {
      label: 'third image',
      name: 'imageThree',
      widget: 'image',
      allow_multiple: false,
      hint: 'Gebruik een horizontale afbeelding',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'images',
    },
  ],
}
