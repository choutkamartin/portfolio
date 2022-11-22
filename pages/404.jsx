import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { aboutQuery } from "lib/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getLocalizedText } from "utils/helpers";
import { Timeline } from "components/Timeline";
import { imageBuilder, urlForImage } from "lib/sanity";

const Page = ({ data }) => {
  const { t } = useTranslation("about");
  return (
    <>
      <h1 className="text-9xl font-black text-sky-400">404</h1>
      <p className="mt-16 text-4xl font-bold">Stránka nenalezena</p>
    </>
  );
};

export async function getStaticProps({ locale, preview = false }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "header", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

Page.layout = Layout;
export default Page;
