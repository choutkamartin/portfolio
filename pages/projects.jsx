import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { indexQuery } from "lib/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getLocalizedText } from "utils/helpers";

const Page = ({ data }) => {
  const { posts, projects } = data;
  const { t } = useTranslation("index");

  return (
    <>
      <div className="py-16">
        <h2 className="text-4xl font-bold">{t("projects")}</h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((item) => (
            <div
              className="relative w-full border-4 border-black p-8"
              key={item._id}
            >
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.date}</p>
              <p className="my-2 text-gray-600">
                {getLocalizedText(item.description)}
              </p>
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-sky-100"></div>
            </div>
          ))}
        </div>
      </div>
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
