import React from "react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle?: string;
  links?: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, links }) => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        {links && (
          <nav className="flex space-x-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <a className="hover:underline">{link.label}</a>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;