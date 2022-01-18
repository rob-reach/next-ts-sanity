import React from "react";
import Head from "next/head";
import Counter from "../components/elements/Counter";
import TestForm from "../components/elements/TestForm";
import Layout from "../components/layouts/Layout";

/**
 * Home: The landing page of the wesbite.
 *
 * @return {JSX.Element} The JSX code for the Homepage
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Reach Next Js Starter - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main>
          <h1>Home Page</h1>
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
