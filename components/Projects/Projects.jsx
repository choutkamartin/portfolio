import { Project } from "components/Project";
import { useState } from "react";
import { joinClassNames } from "utils/helpers";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    name: "Webové stránky",
    value: "website",
  },
  {
    name: "Aplikace",
    value: "application",
  },
  {
    name: "Překlady",
    value: "translation",
  },
  {
    name: "Open-source",
    value: "open-source",
  },
];

const Projects = ({ data }) => {
  const [type, setType] = useState(tabs[0].value);
  return (
    <>
      <p className="mb-8 text-lg text-gray-800">
        Projekty, které jsem vytvořil pro klienty nebo které jsou hojně
        využívány uživateli.
      </p>
      <div className="flex flex-wrap gap-4 sm:flex-nowrap">
        {tabs.map((item, index) => (
          <button
            className={joinClassNames(
              "group relative w-full overflow-hidden border-2  border-black px-4 py-3 text-gray-800 transition-colors"
            )}
            onClick={() => setType(item.value)}
            key={index}
          >
            {item.name}
            <div
              className={joinClassNames(
                "absolute inset-0 -z-10 h-full w-full bg-sky-100  transition-all group-hover:bg-blue-100",
                item.value === type ? "top-0" : "top-full"
              )}
            ></div>
          </button>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {data
          .filter((item) => item.type === type)
          .map((item, index) => (
            <AnimatePresence exitBeforeEnter key={item._id}>
              <Project data={item} key={item._id} />
            </AnimatePresence>
          ))}
      </div>
    </>
  );
};

export default Projects;
