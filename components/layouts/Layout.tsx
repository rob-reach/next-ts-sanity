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
    <>
      <Header />
      {children}
    </>
  );
}
