import { defineType } from 'sanity';

export const dishType = defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Appetizer', 'Main Course', 'Dessert', 'Drinks', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // This crops the images
      },
    },

    {
        name: 'isSpecial',
        title: 'Restaurant Special',
        type: 'boolean',
        description: 'Indicate if this dish is a special dish',
        initialValue: false, // default value is false
      },
      {
        name: 'isChefFavourite',
        title: 'Chef Favourite',
        type: 'boolean',
        description: 'Indicate if this dish is a chef\'s favorite',
        initialValue: false,
      },
      {
        name: 'isRestaurant_Signature_Dish',
        title: 'Restaurant Signature Dish',
        type: 'boolean',
        description: 'Indicate if this dish is a Restaurant Signature dish',
        initialValue: false,
      },
  ],
});
