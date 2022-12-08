import "styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { Raleway } from "@next/font/google";

const inter = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const { border, banner } = Component;
  const url = `https://wallis.dev${router.route}`;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={`${inter.variable} font-sans`}>
        {Component.layout ? (
          getLayout(
            <Layout border={border} banner={banner}>
              <Component {...pageProps} canonical={url} key={url} />
            </Layout>
          )
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
