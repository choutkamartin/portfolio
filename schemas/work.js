import { BookIcon } from '@sanity/icons';
import { defineType } from 'sanity';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'work',
  title: 'Work',
  icon: BookIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          title: 'Czech',
          name: 'cs',
          type: 'string'
        },
        {
          title: 'English',
          name: 'en',
          type: 'string'
        }
      ],
      validation: (Rule) => Rule.required()
    },

    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: 'Czech',
          name: 'cs',
          type: 'string'
        },
        {
          title: 'English',
          name: 'en',
          type: 'string'
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title.cs',
      author: 'author.name',
      media: 'coverImage'
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    }
  }
});
