import NextLink from "next/link";
import { getLocalizedText } from "utils/helpers";

const Post = ({ data }) => {
  return (
    <NextLink
      className="group relative block w-full border-2 border-black p-8"
      href={data.slug}
    >
      <h3 className="text-3xl font-bold">{getLocalizedText(data.title)}</h3>
      <p className="mt-2 text-gray-600">{data.date}</p>
      <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-blue-100 transition-colors group-hover:bg-sky-100"></div>
    </NextLink>
  );
};

export default Post;
