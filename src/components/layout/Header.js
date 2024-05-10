"use client";
import Link from "next/link";
import SideMenu from "../layout/SideMenu";
import CartIcon from "./CartIcon";

export default function Header() {
  const user = true;
  return (
    <header className="flex items-center justify-between  max-w-4xl mx-auto p-4  ">
      <Link
        href="/"
        className="text-primary font-bold text-2xl flex items-center"
      >
        <span className="text-6xl ">
          <i>F</i>
        </span>
        AST MEAL
      </Link>
      <nav className="hidden md:flex gap-8 text-gray-600 font-semibold items-center ">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <nav className="hidden md:flex items-center gap-4 text-gray-600 font-semibold">
        <div className="md:flex gap-4 hidden m ">
          {!user ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <Link
              href={"/orders"}
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Order
            </Link>
          )}
          <CartIcon />
        </div>
      </nav>
      <div className="md:hidden">
        <SideMenu />
      </div>
    </header>
  );
}
