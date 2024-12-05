"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="space-x-4 ">
      <Link href="/" className={pathname === "/" ? "underline" : ""}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "underline" : ""}>
        About
      </Link>
      <Link
        href="/products/1"
        className={pathname === "/products/1" ? "underline" : ""}
      >
        Product 1
      </Link>
      <Link
        href="/users-client"
        className={pathname === "/products/2" ? "underline" : ""}
      >
        Product 2
      </Link>
    </nav>
  );
}
