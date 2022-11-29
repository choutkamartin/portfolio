import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { indexQuery } from "lib/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocalizedText } from "utils/helpers";
import { Projects } from "components/Projects";
import useTranslation from "utils/useTranslation";

const Page = ({ data }) => {
  const { posts, projects } = data;
  const { t } = useTranslation("index");

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold">{t("projects")}</h2>
      <Projects data={projects} />
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
