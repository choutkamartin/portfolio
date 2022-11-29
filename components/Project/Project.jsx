import { getLocalizedText } from "utils/helpers";
import NextLink from "next/link";
import { Button } from "components/Button";
import { motion, AnimatePresence } from "framer-motion";

const Project = ({ data }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <NextLink
        href={`/project/${data.slug.current}`}
        className="group relative block h-full w-full justify-between border-2 border-black p-8"
      >
        <h3 className="text-2xl font-bold">{data.title}</h3>
        <p className="mt-2 text-gray-600">{data.date}</p>
        <p className="my-2 text-gray-600">
          {getLocalizedText(data.description)}
        </p>
        <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-gradient-to-br from-transparent to-sky-200 transition-colors group-hover:bg-blue-200" />
      </NextLink>
    </motion.div>
  );
};

export default Project;
