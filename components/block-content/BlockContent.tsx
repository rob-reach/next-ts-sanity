import React from "react";
import { createPortableTextComponent } from "next-sanity";
import { config } from "../../lib/sanity/config";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import BlogImage from "./BlogImage";

interface IImageBlockType {
  node: {
    asset: SanityImageObject;
  };
}

export const BlockContent = createPortableTextComponent({
  ...config,

  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      image: (props: IImageBlockType) => <BlogImage asset={props.node.asset} />,
    },
  },
});
