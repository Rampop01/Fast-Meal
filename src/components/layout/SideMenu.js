import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "../layout/CartIcon";

function SideMenu() {
  const [open, setOpen] = useState(false);
  const SideMenuLinks = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "About", url: "/about" },
    { id: 4, title: "Contact", url: "/contact" },
  ];
  const user = false;

  return (
    <div>
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
      {open && (
        <div className="bg-primary text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center text-3xl gap-8 z-10 ">
          {SideMenuLinks.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(!open)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
