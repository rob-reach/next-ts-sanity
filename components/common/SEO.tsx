import React from "react";
import { NextSeo } from "next-seo";

interface ISEOProps {
  title: string;
  description: string;
}

/**
 * SEO Component for the site
 *
 * @param {Object} props SEO component props
 * @return {JSX.Element} JSX Code for the NextSEO component
 */
export default function SEO(props: ISEOProps) {
  return <NextSeo title={props.title} description={props.description} />;
}
