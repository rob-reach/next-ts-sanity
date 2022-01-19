import React from "react";
import Counter from "../components/elements/Counter";
import TestForm from "../components/elements/TestForm";
import Layout from "../components/layouts/Layout";
import SEO from "../components/common/SEO";
import { motion } from "framer-motion";

/**
 * Home: The landing page of the wesbite.
 *
 * @return {JSX.Element} The JSX code for the Homepage
 */
export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the homepage" />
      <div className="container">
        <main>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Home Page
          </motion.h1>
          <p className="text-2xl">See some example components below:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h2>Test Form</h2>
              <TestForm />
            </div>
            <div>
              <h2>Test Counter (Context API)</h2>
              <Counter />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
