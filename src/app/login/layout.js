import Header from "@/Components/Header";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li>
          <Link href="/login/loginstudent">StduentLogin</Link>
        </li>
        <li>
          <Link href="/login/teacher">teacher</Link>
        </li>
        <li>
          <Link href="/login">Main</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
