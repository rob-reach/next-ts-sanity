import React from "react";
import Link from "next/link";

/**
 * Header component
 *
 * @return {JSX.Element} JSX Code for the Header Component
 */
export default function Header() {
  return (
    <header>
      <div className="container py-8">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
