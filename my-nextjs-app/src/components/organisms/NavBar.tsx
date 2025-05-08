import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const NavBar: React.FC = () => {
  return (
    <nav
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 208, 208, 0.36), rgb(33, 32, 32))",
      }}
      className="h-full fixed top-0 left-0 w-32 flex flex-col items-center py-6">
      <div className="text-white text-center mb-6">
        <Link href="/"></Link>
        <span className="text-2xl font-bold">RM</span>
      </div>
      <ul className="flex flex-col space-y-8">
        {navLinks.map((link, index) => (
          <li key={index} className="text-white">
            <Link
              href={link.href}
              className="hover:text-gray-400 block text-right"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
