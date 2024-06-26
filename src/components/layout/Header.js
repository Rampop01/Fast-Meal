import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between  max-w-4xl mx-auto p-4 ">
      <Link
        href="/"
        className="text-primary font-bold text-2xl flex items-center"
      >
        <span className="text-6xl ">
          <i>F</i>
        </span>
        AST MEAL
      </Link>
      <nav className="flex gap-8 text-gray-600 font-semibold items-center">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-600 font-semibold">
        <Link href={"/login"}> Login</Link>
        <Link
          href={"/register"}
          className="bg-primary text-white px-8 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
