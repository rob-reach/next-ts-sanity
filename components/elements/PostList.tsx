import React from "react";
import Link from "next/link";
import { post } from "../../pages/blog";
import usePagination from "../../lib/hooks/usePagination";
import Pagination from "./Pagination";

interface IPostsListProps {
  posts: post[];
}

/**
 * Post list container
 *
 * @return {JSX.Element} JSX Code for the post list
 */
export default function PostList({ posts }: IPostsListProps) {
  const { pageNumbers, currentPosts, paginate, currentPage } =
    usePagination(posts);
  return (
    <div>
      <ul className="grid-cols-3">
        {currentPosts.map((post: post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Pagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
