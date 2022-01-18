import { groq } from "next-sanity";
import React from "react";
import Layout from "../../components/layouts/Layout";
import { getClient } from "../../lib/sanity/sanity.server";

interface slug {
  _type: string;
  current: string;
}

interface postSlug {
  slug: slug;
}

interface staticPropsParams {
  params: {
    slug: string;
  };
}

interface post {
  slug: string;
  title: string;
}

interface pageProps {
  post: post;
}

/**
 * Blog post page
 *
 * @return {JSX.Element} JSX Code for the single post page
 */
export default function Post({ post }: pageProps) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Layout>
  );
}

// Posts query to get slugs
const postsSlugsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))]{
  slug
}`;

// Posts query to get post data
const postQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
  "id" : _id,
  title,
}`;

/**
 * Function to get static page props
 *
 * @param {Object} params Object containing path paramaters
 * @return {Object} static page props
 */
export async function getStaticProps({ params }: staticPropsParams) {
  const post = await getClient().fetch(postQuery, { slug: params.slug });
  return {
    props: {
      post,
    },
  };
}

/**
 * Function to generate the blog post pages
 *
 * @return {Array} Array of static paths for blog posts
 */
export async function getStaticPaths() {
  const postSlugs = await getClient().fetch(postsSlugsQuery);
  const paths = postSlugs.map((post: postSlug) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
