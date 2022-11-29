import { BookIcon, ImageIcon } from "@sanity/icons";
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
  name: "project",
  title: "Project",
  icon: BookIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
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
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Application", value: "application" },
          { title: "Translation", value: "translation" },
          { title: "Open Source", value: "open-source" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
    {
      name: "website",
      title: "Website",
      type: "url",
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
          of: [
            {
              type: "block",
              marks: {
                annotations: [
                  {
                    name: "button",
                    type: "object",
                    title: "Button",
                    fields: [
                      {
                        name: "url",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            },
            { type: "image", icon: ImageIcon },
          ],
        },
        {
          title: "English",
          name: "en",
          type: "array",
          of: [
            {
              type: "block",
              marks: {
                annotations: [
                  {
                    name: "button",
                    type: "object",
                    title: "Button",
                    fields: [
                      {
                        name: "url",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            },
            { type: "image", icon: ImageIcon },
          ],
        },
      ],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "coverImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
