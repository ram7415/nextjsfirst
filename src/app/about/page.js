"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <div>About page</div>
      <button onClick={() => router.push("/")}>go to home</button>
      <br></br>
      <Link href="/about/aboutstudent">go to College</Link>
    </div>
  );
};

export default About;
