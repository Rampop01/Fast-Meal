"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      <div className="text-center ">
        Account created successfully.{" "}
        <Link href="/login" className="underline text-blue-700">
          Login
        </Link>{" "}
        here
      </div>

      <form className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          // value={email}
          // disabled={creatingUser}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src="/google-trans-icon.jpeg"
            alt="google-icon"
            width={24}
            height={24}
          />{" "}
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
}
