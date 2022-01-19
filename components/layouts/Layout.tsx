import { motion } from "framer-motion";
import React from "react";
import Header from "../common/Header";

interface layoutComponentProps {
  children: React.ReactNode;
}

/**
 * Default Layout component
 *
 * @return {JSX.Element} JSX Code for the default layout component
 */
export default function Layout({ children }: layoutComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      {children}
    </motion.div>
  );
}
