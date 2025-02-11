import { defineType } from 'sanity';

export const reservationType = defineType({
  name: 'reservation',
  title: 'Reserve your Table',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'string',
    },
    {
        name: 'date_and_time',
        title: 'Date and Time',
        type: 'datetime',
      },
    {
      name: 'party_size',
      title: 'Party Size',
      type: 'number',
      description: 'The number of people in your party',
    },
  ],
});
