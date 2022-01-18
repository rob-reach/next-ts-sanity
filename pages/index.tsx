import React from "react";
import Head from "next/head";
import Counter from "../components/Counter";
import TestForm from "../components/TestForm";

/**
 * Home: The landing page of the wesbite.
 *
 * @return {JSX.Element} The JSX code for the Homepage
 */
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reach Next Js Starter - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-container">
          <Counter />
          <TestForm />
        </div>
      </main>
    </div>
  );
}
