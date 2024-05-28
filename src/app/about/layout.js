import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-pink-200">
      <ul className="flex justify-evenly">
        <li>
          <Link href="/about/aboutCollege">College</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">student</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
