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
  console.log(model);
  return (
    <>
      <div className="flex flex-wrap items-center gap-8 pb-36 sm:flex-nowrap lg:gap-32">
        <div className="shrink">
          <h1 className="text-6xl font-bold">O mně</h1>
          <p
            className="mt-2 text-lg text-gray-600"
            dangerouslySetInnerHTML={{
              __html: t("about", { interpolation: { escapeValue: false } }),
            }}
          />
          <p className="mt-8 text-lg text-gray-600">
            Pracuji v ČSOB, na pozici web content managera. Spravuji CEB -
            Company Electronic Banking. Jedná se o internetové bankovnictví pro
            firmy a korporace. Mojí náplní je správa portálu, tvorba/úprava
            webového obsahu, publikování kampaní a tvorba nových PDF formulářů
            či úprava již stávajících - v JavaScriptu.
          </p>
          <p className="mt-8 text-lg text-gray-600">
            Tvorbu webů, aplikací či programů jsem se naučil kompletně sám -
            baví mě to a tak se v tom snažím zdokonalovat. Ovládám plynně
            technologie a jazyky, které jsou vypsány o kousek dole.
          </p>
        </div>
        <div className="relative sm:-translate-x-1/4 sm:pl-4">
          <div className="relative h-40 w-40 shrink-0 rounded-full">
            <Image
              src="/avatar.jpeg"
              fill
              className="rounded-full object-cover"
            />
            {/* <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-600">
              <div className="absolute h-0.5 w-20 origin-top-left -translate-x-0.5 -rotate-90 bg-gray-600"></div>
            </div> */}
          </div>
          <div className="absolute top-1/4 left-1/4 -z-10 h-40 w-40 bg-sky-400"></div>
        </div>
      </div>
      <hr />
      <div className="py-32">
        <h2 className="mb-8 text-4xl font-bold">{t("work-experience")}</h2>
        <Timeline>
          {work.map((item) => {
            return (
              <Timeline.Item
                key={item._id}
                title={item.title.cs}
                date={item.date}
                description={getLocalizedText(item.description)}
              />
            );
          })}
        </Timeline>
        <h2 className="mb-8 text-4xl font-bold">{t("education")}</h2>
        <Timeline>
          {education.map((item) => {
            return (
              <Timeline.Item
                key={item._id}
                title={item.title.cs}
                date={item.date}
                description={getLocalizedText(item.description)}
              />
            );
          })}
        </Timeline>
      </div>
      <hr />
      <div className="py-32">
        <h2 className="mb-8 text-4xl font-bold">CAD modely</h2>
        <p className="my-8 text-lg text-gray-600">
          Strojírenské součásti a jejich modely které jsem vytvořil při studiu
          na střední školy. Všechny obrázky odkazují na web GrabCAD, odkud se
          dají modely stáhnout.
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
                <div className="absolute bottom-0 h-0 w-full overflow-hidden bg-sky-400 bg-opacity-50 backdrop-blur-lg transition-all group-hover:h-full">
                  <div className="p-6">
                    <p className="mb-4 text-2xl font-bold">{item.title}</p>
                    <p className="text-gray-600">
                      {getLocalizedText(item.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
