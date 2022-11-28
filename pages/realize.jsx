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
import { Pricing } from "components/Pricing";

const Page = ({ data }) => {
  const { education, work, model } = data;
  const { t } = useTranslation("about");

  return (
    <>
      <h2 className="mb-8 text-4xl font-bold">
        Chci webovou stránku či aplikaci
      </h2>
      <div className="prose">
        <p>
          Pokud chcete vytvořit webovou stránku, zhruba takto probíhá postup.
          Ačkoliv se seznam zdá být dlouhý, ve skutečnosti vše zabere pouze
          chvíli. Otázky níže mi zároveň pomohou lépe uchopit Vaší vizi.
        </p>
        <ol>
          <li>Probereme spolu Vaší vizi</li>
          <ul>
            <li>Co vaše společnost/živnost poskytuje?</li>
          </ul>
          <li>
            Rozebereme na koho Váš web cílí, co by měl web obsahovat a jak
            rozsáhlý by měl být
          </li>
          <ul>
            <li>Kdo je Váš typický zákazník?</li>
            <li>
              Máte k dispozici branding? Pokud nemáte, chcete branding (logotyp,
              barvy) navrhnout?
            </li>
            <li>Podnikáte v rámci České republiky nebo celosvětově?</li>
            <li>
              Je potřeba zřídit doménu? Je potřeba zřídít e-mailové schránky?
            </li>
            <li>Potřebujete v rámci webu speciální funkce viz. následující?</li>
            <ul>
              <li>Vícejazyčnost</li>
              <li>Kontaktní formulář</li>
              <li>Napojení na vzdálenou databázi</li>
              <li>Upravovat v administraci speciální položky?</li>
            </ul>
          </ul>
          <li>Domluvíme se na ceně a termínu zpracování</li>
          <ul>
            <li>Do kdy bude webová stránka zpracována</li>
            <li>Kolik celá webová stránka stojí</li>
            <li>Kolik činí záloha</li>
          </ul>
          <li>Připravím smlouvu</li>
          <ul>
            <li>Jednoduchá smlouva bez složitých obstrukcí</li>
            <li>Můžeme ji podepsat na dálku</li>
          </ul>
          <li>
            V případě, že jsme se dohodli a smlouvu podepsali, vrhnu se na
            tvorbu Vaší webové stránky. O průběhu Vás budu neustále informovat.
            Pokud se Vám něco nebude líbit, upravíme vše do takové podoby, se
            kterou budete spokojeni.
          </li>
        </ol>
      </div>
      <Pricing />
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
