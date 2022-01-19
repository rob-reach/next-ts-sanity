import React from "react";
import Link from "next/link";
import { post } from "../../pages/blog";
import usePagination from "../../lib/hooks/usePagination";
import Pagination from "./Pagination";
import { AnimatePresence, motion } from "framer-motion";

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
    <>
      <ul className="min-h-[72px]">
        {currentPosts.map((post: post) => (
          <AnimatePresence key={post.id} exitBeforeEnter>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </motion.li>
          </AnimatePresence>
        ))}
      </ul>

      <Pagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
