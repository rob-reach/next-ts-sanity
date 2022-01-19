import React from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { CountContextProvider } from "../lib/context/CounterContext";
import CookiesBanner from "../components/common/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AnimatePresence } from "framer-motion";

/**
 * Custom _app component
 *
 * @param {object} param0 _app props
 * @return {JSX.Element} The JSX code for the custom _app file.
 */
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <CountContextProvider>
      <DefaultSeo {...SEO} />
      <CookiesBanner />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </CountContextProvider>
  );
}

export default MyApp;
