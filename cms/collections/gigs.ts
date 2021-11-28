export default {
  label: 'Gigs',
  name: 'Gigs',
  create: true,
  folder: 'content/gigs',
  summary: 'Gig | {{fields.place}}, {{fields.venue}}',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Place',
      name: 'place',
      widget: 'string',
      required: true,
    },
    {
      label: 'Venue',
      name: 'venue',
      widget: 'string',
      required: true,
    },
    {
      label: 'Ticket Link',
      name: 'url',
      widget: 'string',
      required: false,
    },
    {
      label: 'Date',
      name: 'date',
      widget: 'date',
      format: 'D-M-YY',
      required: true,
    },
    {
      label: 'Gig is cancelled',
      name: 'isCancelled',
      widget: 'boolean',
      default: false,
      required: true,
    },
  ],
}
