import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

import authorType from "./author";

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
  name: "post",
  title: "Post",
  icon: BookIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          title: "Czech",
          name: "cs",
          type: "string",
        },
        {
          title: "English",
          name: "en",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          title: "Czech",
          name: "cs",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          title: "English",
          name: "en",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title.cs",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
