import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { indexQuery } from "lib/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useTranslation from "utils/useTranslation";
import { getLocalizedText, joinClassNames } from "utils/helpers";
import { Tab } from "components/Tab";
import { useState } from "react";
import { Project } from "components/Project";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Post } from "components/Post";

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

const Page = ({ data }) => {
  const { posts, projects } = data;
  const { t } = useTranslation("index");
  const [type, setType] = useState(tabs[0].value);

  return (
    <>
      <div className="flex flex-wrap items-center gap-8 pb-36 sm:flex-nowrap lg:gap-32">
        <div className="shrink">
          <h1 className="text-6xl font-bold">{t("introduction")}</h1>
          <p
            className="mt-2 text-xl text-gray-600"
            dangerouslySetInnerHTML={{
              __html: t("about", { interpolation: { escapeValue: false } }),
            }}
          />
          <p className="mt-8 text-lg text-gray-600">{t("description")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              as="link"
              href="/about-me"
              size="xl"
              style="primary"
              className="mt-2"
            >
              {t("about-button")}
            </Button>
            <Button
              as="link"
              href="/realize"
              size="xl"
              style="secondary"
              className="mt-2"
            >
              {t("lets-realize")}
            </Button>
          </div>
        </div>
        <div className="relative sm:-translate-x-1/4 sm:pl-4">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full shadow-2xl">
            <Image src="/avatar.jpeg" fill className="object-cover" />
            {/* <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-600">
              <div className="absolute h-0.5 w-20 origin-top-left -translate-x-0.5 -rotate-90 bg-gray-600"></div>
            </div> */}
          </div>
          <div className="absolute top-1/4 left-1/4 -z-10 h-40 w-40 bg-sky-400"></div>
        </div>
      </div>
      <hr />
      <div className="py-16">
        <h2 className="mb-4 text-4xl font-bold">{t("projects")}</h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          {tabs.map((item, index) => (
            <button
              className={joinClassNames(
                "group relative w-full overflow-hidden border-2 border-black px-4 py-3 text-gray-800 transition-colors"
              )}
              onClick={() => setType(item.value)}
              key={index}
            >
              {item.name}
              <div
                className={joinClassNames(
                  "absolute inset-0 -z-10 h-full w-full bg-blue-100  transition-all group-hover:bg-sky-100",
                  item.value === type ? "top-0" : "top-full"
                )}
              ></div>
            </button>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects
            .filter((item) => item.type === type)
            .map((item, index) => (
              <Project data={item} key={index} />
            ))}
        </div>
      </div>
      <motion.div
        className="pt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">{t("posts")}</h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((item, index) => (
            <Post data={item} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ locale, preview = false }) {
  const data = await getClient(preview).fetch(indexQuery);
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["index", "header", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

Page.layout = Layout;
export default Page;
