import { motion, useViewportScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 h-2 w-full origin-top-left bg-sky-400"
        style={{ scaleX }}
      />
    </>
  );
}
