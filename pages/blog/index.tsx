import React from "react";
import Layout from "../../components/layouts/Layout";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity/sanity.server";
import PostList from "../../components/elements/PostList";

export interface slug {
  _type: string;
  current: string;
}

export interface post {
  id: string;
  slug: slug;
  title: string;
}

export interface pageStaticProps {
  data: {
    posts: post[];
  };
}

/**
 * Blog index page
 *
 * @return {JSX.Element} JSX Code for the blog index page
 */
export default function BlogIndex({ data }: pageStaticProps) {
  const { posts } = data;

  return (
    <Layout>
      <div className="container">
        <h1>Blog</h1>

        <PostList posts={posts} />

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  );
}

const postsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))] | order(_createdAt desc){
  'id':_id,
  title,
  slug
}`;

/**
 * Query for static page props
 *
 * @return {Object} Static page props
 */
export async function getStaticProps() {
  const posts = await getClient().fetch(postsQuery);
  return {
    props: {
      data: { posts },
      revalidate: 10,
    },
  };
}
