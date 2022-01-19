import Image from "next/image";
import React from "react";
import { urlFor } from "../../lib/sanity/sanity-img-builder";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

interface IProps {
  asset: SanityImageObject;
}

/**
 * Image block for the content block component
 *
 * @return {JSX.Element} JSX Code for the blog image used within the block content component
 */
export default function BlogImage({ asset }: IProps) {
  return (
    <figure>
      <Image
        src={urlFor(asset).width(300).height(300).url() as string}
        width={300}
        height={300}
        objectFit="cover"
      />
    </figure>
  );
}
