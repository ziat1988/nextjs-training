import Link from "next/link";
import React from "react";

function Home(props) {
  return (
    <div>
      This is home page
      <ul>
        <li>
          <Link href={"/product"}>Product</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/users"}> List User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
