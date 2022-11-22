import "styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const { border, banner } = Component;

  return (
    <ThemeProvider attribute="class">
      {Component.layout ? (
        getLayout(
          <Layout border={border} banner={banner}>
            <Component {...pageProps} />
          </Layout>
        )
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
