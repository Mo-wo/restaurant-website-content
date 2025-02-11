import { defineType } from 'sanity';

export const team = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
      name: 'name',
      title: 'Name of Team Member',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
  ],
});
