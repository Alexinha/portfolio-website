"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MobileMenu from "./MobileMenu";
import { themeMain } from "../theme";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10"
      style={{ backgroundColor: themeMain.colors.background, opacity: 0.9 }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-10">
        <Link
          href={"/"}
          className={`text-xl md:text-2xl text-white`}
          style={{ fontFamily: themeMain.fonts.signature }}
        >
          Alexina Jingxuan Chang
        </Link>
        {/* menu for small screens */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-x-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-x-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* menu for md to lg screens */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenu links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
