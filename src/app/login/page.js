"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href={"/"}>
          <button type="submit">Login</button>
        </Link>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button
          onClick={() => signIn("google")}
          className="flex gap-4 justify-center"
          disabled={loginInProgress}
        >
          <Image
            src={"/google-trans-icon.jpeg"}
            alt={"google-icon"}
            width={24}
            height={24}
          />{" "}
          Login with google
        </button>
      </form>
    </section>
  );
}
