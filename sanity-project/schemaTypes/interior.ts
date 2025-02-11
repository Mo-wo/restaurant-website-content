import { defineType } from 'sanity';

export const interior = defineType({
  name: 'interior',
  title: 'Interior',
  type: 'document', 
  fields: [
    {
      name: 'images', 
      title: 'Images',
      type: 'array',  
      of: [
        {
          type: 'image', 
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
});
