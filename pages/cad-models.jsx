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
  const { education, work, model } = data;
  const { t } = useTranslation("about");

  return (
    <>
      <h2 className="mb-8 text-4xl font-bold">CAD modely</h2>
      <p className="my-8 text-lg text-gray-600 dark:text-gray-200">
        Strojírenské součásti a jejich modely které jsem vytvořil při studiu na
        střední školy. Všechny obrázky odkazují na web GrabCAD, odkud se dají
        modely stáhnout.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {model.map((item) => (
          <div key={item._id}>
            <div className="group relative mb-4 h-64 w-full cursor-pointer">
              <Image
                src={urlForImage(item.render)}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 h-0 w-full overflow-hidden bg-sky-400 bg-opacity-50 backdrop-blur-lg transition-all group-hover:h-full dark:bg-sky-600 dark:bg-opacity-50">
                <div className="p-6">
                  <p className="mb-4 text-2xl font-bold">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-200">
                    {getLocalizedText(item.description)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps({ locale, preview = false }) {
  const data = await getClient(preview).fetch(aboutQuery);
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["about", "header", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

Page.layout = Layout;
export default Page;
