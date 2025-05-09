import React from "react";
import Link from "next/link";

interface FooterProps {
  links?: { label: string; href: string }[];
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({ links, copyright }) => {
  return (
    <footer className="bg-black w-full bottom-0 fixed text-white py-6 mt-10 border-t border-white">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div>
          {links && (
            <nav className="flex flex-wrap space-x-4">
              {links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <a className="hover:underline">{link.label}</a>
                </Link>
              ))}
            </nav>
          )}
        🧠 Powered by caffeine & curiosity <br />📍 Based in Virginia, coding from the woods
        </div>
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          {copyright || "© 2025 Rachel Mancini. All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;