import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Link } from "components/Link";
import Image from "next/image";
import { getClient } from "lib/sanity.server";
import { indexQuery } from "lib/queries";
import { getLocalizedText } from "utils/helpers";
import { Projects } from "components/Projects";
import { postSlugsQuery, postQuery } from "lib/queries";
import { useRouter } from "next/router";
import { usePreviewSubscription } from "lib/sanity";
import { RenderRichText } from "components/RenderRichText";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = (props) => {
  const { data: initialData, preview, blogSettings } = props;
  const router = useRouter();

  const slug = initialData?.post?.slug;
  const { data } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: initialData,
    enabled: preview && !!slug,
  });
  const { project, moreProjects } = data || {};
  console.log(project);
  return router.isFallback ? (
    <>Test</>
  ) : (
    <>
      <h1 className="mb-4 text-6xl font-bold">{project.title}</h1>
      <div className="prose">
        <RenderRichText data={getLocalizedText(project.content)} />
      </div>
    </>
  );
};

export async function getStaticProps({ locale, params, preview = false }) {
  const { project, moreProjects } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        project,
        moreProjects,
      },
      ...(await serverSideTranslations(locale, ["about", "header", "footer"])),
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths({ locales }) {
  const paths = await getClient(false).fetch(postSlugsQuery);
  console.log(paths);
  console.log(locales);
  const ha = paths.flatMap((slug) => {
    return locales.map((locale) => {
      return {
        params: { slug: slug },
        locale,
      };
    });
  });
  console.log(ha);
  return {
    paths: ha,
    fallback: false,
  };
}

Page.layout = Layout;
export default Page;
