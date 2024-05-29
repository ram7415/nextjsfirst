"use client";
import Header from "@/Components/Header";
import Try from "@/Components/Try";
import Image from "next/image";
// import "./globals.css";
import img from "../../public/vercel.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100"], // Make sure to specify weight as an array if you intend to use multiple weights
});
// import custom from "./custom.module.css";
// import other from "@/other/other.module.css";
export default function Home() {
  const router = useRouter();
  return (
    // <main className={other.main}>
    <main>
      {/* <div classNameName="text-4xl font-bold text-blue-600">happy</div> */}
      <Image src={img} />
      <Image
        src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png"
        width={200}
        height={200}
      />
      <h3 className="{roboto.className}">google fonts are used here</h3>
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
