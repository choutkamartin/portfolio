import groq from "groq";

const postFields = groq`
  _id,
  title,
  "slug": slug.current
`;

export const settingsQuery = groq`*[_type == "settings"][0]{title}`;

export const indexQuery = groq`
{
  "projects": *[_type == "project"] | order(date desc),
  "posts": *[_type == "post"] | order(date desc)
}
`;

export const aboutQuery = groq`
{
  "education": *[_type == "education"] | order(date desc),
  "work": *[_type == "work"] | order(date desc),
  "model": *[_type == "model"] | order(date desc),
}
`;

export const postQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
