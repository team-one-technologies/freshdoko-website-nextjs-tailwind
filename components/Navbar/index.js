import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Routes } from "./routes";
import { NavItem } from "./navItem";
export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const prevScrollY = useRef(0);

  const [goindDown, setGoingDown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 5 && !goindDown) {
        setGoingDown(true);
      }
      if (currentScrollY < 5 && goindDown) {
        setGoingDown(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goindDown]);



  return (
    <nav
      className={`  flex header flex-wrap fixed w-full   items-center justify-between px-2 py-3 z-50  text-gray-800 transition duration-1000${
        goindDown
          ? "header--narrow bg-gradient-to-br from-transparent to-green-100  h-[6rem] text-black"
          : ""
      }`}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-start justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img
            className={` object-fill ${
              goindDown ? "w-40" : "lg:w-52  w-36 h-auto "
            }`}
            alt=""
            src="/img/logo.png"
          ></img>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <svg
                className={`fill-current h-5 w-5`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              <svg
                className={`fill-current h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul
            className={`flex flex-col  justify-center gap-x-5 gap-y-5 lg:flex-row list-none lg:ml-auto lg:h-auto ${
              navbarOpen ? " h-screen md:h-screen" : "h-auto"
            }`}
          >
            {Routes.map((v, k) => (
              <NavItem key={k} title={v.title} path={v.path} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
