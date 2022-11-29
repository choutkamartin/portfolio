import { Post } from "components/Post";
import { motion, AnimatePresence } from "framer-motion";

const Posts = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
      {data.map((item, index) => (
        <AnimatePresence exitBeforeEnter key={item._id}>
          <Post data={item} key={item._id} />
        </AnimatePresence>
      ))}
    </div>
  );
};

export default Posts;
