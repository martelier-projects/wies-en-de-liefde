import flexibles from '../flexibles'
import seo from '../helpers/seo'

export default {
  label: 'Pages',
  name: 'pages',
  files: [
    {
      label: 'Home',
      name: 'home',
      file: 'content/pages/home.md',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/',
        },
        {
          label: 'Home Section',
          name: 'sections',
          widget: 'list',
          types: flexibles,
          collapsed: true,
        },
        seo,
      ],
    },
    {
      label: 'Buslading muziek',
      name: 'buslading-muziek',
      file: 'content/pages/buslading-muziek.md',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/buslading-muziek',
        },
        {
          label: 'Buslading muziek',
          name: 'sections',
          widget: 'list',
          types: flexibles,
          collapsed: true,
        },
        seo,
      ],
    },
    {
      label: 'Over de liefde',
      name: 'over-de-liefde',
      file: 'content/pages/over-de-liefde.md',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/over-de-liefde',
        },
        {
          label: 'Over de liefde',
          name: 'sections',
          widget: 'list',
          types: flexibles,
          collapsed: true,
        },
        seo,
      ],
    },
    {
      label: 'Beeld en geluid',
      name: 'beeld-en-geluid',
      file: 'content/pages/beeld-en-geluid.md',
      editor: {
        preview: false,
      },

      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/beeld-en-geluid',
        },
        {
          label: 'Beeld en geluid',
          name: 'sections',
          widget: 'list',
          types: flexibles,
          collapsed: true,
        },
        seo,
      ],
    },
  ],
}
