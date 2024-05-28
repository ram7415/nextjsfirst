"use client";
import Header from "@/Components/Header";
import Try from "@/Components/Try";
import Image from "next/image";
// import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main>
      {/* <div classNameName="text-4xl font-bold text-blue-600">happy</div> */}

      <Link href="/login">Go to login page</Link>
      <br></br>
      <Link href="/about">Go to about page</Link>
      <br></br>
      <Try />
      <h3 classNameName="text-">do something which makes u smile</h3>
      <button onClick={() => router.push("/login")}>Login</button>
      <br></br>
      <Link href="/product">product page here</Link>
    </main>
  );
}
