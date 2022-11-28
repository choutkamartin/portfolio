import "styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import "styles/transition.css";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const { border, banner } = Component;
  const url = `https://wallis.dev${router.route}`;

  return (
    <ThemeProvider attribute="class">
      {Component.layout ? (
        getLayout(
          <Layout border={border} banner={banner}>
            <Component {...pageProps} canonical={url} key={url} />
          </Layout>
        )
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
