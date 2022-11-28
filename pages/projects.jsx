import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { indexQuery } from "lib/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getLocalizedText } from "utils/helpers";
import { Project } from "components/Project";

const Page = ({ data }) => {
  const { posts, projects } = data;
  const { t } = useTranslation("index");

  return (
    <>
      <div className="py-16">
        <h2 className="text-4xl font-bold">{t("projects")}</h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((item) => (
            <Project data={item} key={item._id} />
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
