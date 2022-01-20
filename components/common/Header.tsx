import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import { motion } from "framer-motion";
import CloseIcon from "../icons/CloseIcon";

/**
 * Header component
 *
 * @return {JSX.Element} JSX Code for the Header Component
 */
export default function Header() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  /**
   * Function to update screen width state
   *
   * @return {void} void.
   */
  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const variants = {
    initial: {
      opacity: screenWidth >= 640 ? 1 : 0,
      x: screenWidth >= 640 ? 0 : 100,
    },
    animate: {
      opacity: navOpen ? 1 : 0,
      x: navOpen ? 0 : 100,
    },
  };

  return (
    <header className="bg-white shadow-md mb-8">
      <div className="container py-8 px-2 flex items-center justify-between">
        <Link href="/">
          <a className="hover:opacity-50 transition-opacity duration-300">
            <Image src="/images/reach-logo.png" width={147} height={41} />
          </a>
        </Link>
        <button onClick={() => setNavOpen(!navOpen)} className="z-10 sm:hidden">
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <motion.nav
          initial="initial"
          animate="animate"
          variants={variants}
          className={`fixed top-0 left-0 right-0 h-screen w-screen bg-lynx pointer-events-none sm:visible sm:relative sm:w-auto sm:h-auto sm:bg-transparent ${
            navOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <ul className="list-none pb-4 pt-24 text-center sm:p-0 sm:flex sm:space-x-4">
            <li className="text-2xl block sm:text-base">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl block sm:text-base">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
