import { getLocalizedText } from "utils/helpers";
import NextLink from "next/link";

const Project = ({ data }) => {
  return (
    <NextLink
      href={data.slug}
      className="group relative left-3 block w-full border-2 border-black p-8"
    >
      <h3 className="text-3xl font-bold">{data.title}</h3>
      <p className="mt-2 text-gray-600">{data.date}</p>
      <p className="my-2 text-gray-600">{getLocalizedText(data.description)}</p>
      <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-sky-100 transition-colors group-hover:bg-blue-100"></div>
    </NextLink>
  );
};

export default Project;
