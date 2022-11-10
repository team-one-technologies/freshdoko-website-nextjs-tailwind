import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavItem = ({ key, title, path }) => {
  const router = useRouter();
  return (
    <li className="nav-item">
      <Link
        href={path}
        passHref={true}
        activeClassName="active"
        className={`${
          router.pathname === path
            ? "px-3 py-2 flex items-center font-semibold leading-snug text-lg  mr-4 text-green pointer-events-none"
            : "px-3 py-2 flex items-center text-xs font-medium leading-snug text-lg  mr-4"
        }`}
      >
        <button>
          <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i>
          <span className="ml-2  fromLeft text-lg">{title}</span>
        </button>
      </Link>
    </li>
  );
};
