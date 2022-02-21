export interface postSlug {
  slug: slug;
}

export interface post {
  slug: string;
  title: string;
  body: BlockContentProps;
  seo: seo;
  mainImage: SanityImageObject;
}
