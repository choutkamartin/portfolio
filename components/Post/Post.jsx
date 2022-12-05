import NextLink from "next/link";
import { getLocalizedText } from "utils/helpers";
import { motion, AnimatePresence } from "framer-motion";

const Post = ({ data }) => {
  return (
    <motion.div initial={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
      <NextLink
        className="group relative block h-full w-full justify-between border-2 border-black p-8 dark:border-gray-200"
        href={data.slug}
      >
        <h3 className="text-2xl font-bold">{getLocalizedText(data.title)}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-200">{data.date}</p>
        <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-gradient-to-br from-transparent to-sky-200 transition-colors group-hover:bg-blue-200 dark:to-sky-600 dark:group-hover:bg-blue-600"></div>
      </NextLink>
    </motion.div>
  );
};

export default Post;
