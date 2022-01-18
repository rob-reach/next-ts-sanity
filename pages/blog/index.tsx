import React from "react";
import Layout from "../../components/layouts/Layout";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity/sanity.server";
import Link from "next/link";

interface slug {
  _type: string;
  current: string;
}

interface post {
  id: string;
  slug: slug;
  title: string;
}

interface pageStaticProps {
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

        <ul className="list-disc">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  );
}

const postsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))]{
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
