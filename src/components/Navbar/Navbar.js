"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Clock, ChartLine } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      navigation: "/",
      logo: <Home />,
    },
    {
      label: "Timeline",
      navigation: "/timeline",
      logo: <Clock />,
    },
    {
      label: "Stats",
      navigation: "/stats",
      logo: <ChartLine />,
    },
  ];

  const [active, setActive] = useState("/");

  return (
    <div className="navbar shadow-sm px-2 md:px-10 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {navLinks.map((link, index) => (
              <Link
                href={link.navigation}
                key={index}
                className="flex items-center flex-row px-4 gap-1"
              >
                {link.logo}
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Image src={"/assets/logo.png"} alt="logo" width={140} height={30} />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md text-neutral/60">
          {navLinks.map((link, index) => (
            <Link
              href={link.navigation}
              key={index}
              className={`${link.navigation == active && "btn-active bg-green-900 text-white"} btn btn-ghost flex items-center justify-center flex-row px-4 gap-1`}
              onClick={() => {
                setActive(link.navigation);
              }}
            >
              {link.logo}
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
