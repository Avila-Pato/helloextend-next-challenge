"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="font-bold text-3xl">Dogs breeds</h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/african">african</Link>
          </li>
          <li>
            <Link href="/airedale">airedale</Link>
          </li>
          <li>
            <Link href="/affenpinscher">affenpinscher</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
