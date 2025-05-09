import React from "react";
import Link from "next/link";

interface FooterProps {
  links?: { label: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className="bg-black w-full bottom-0 fixed text-white py-6 mt-10 border-t border-white">
      <div className="flex justify-end mr-4">
        <div>
        🧠 Powered by caffeine & curiosity <br />📍 Based in Virginia, coding from the woods
        </div>
      </div>
    </footer>
  );
};

export default Footer;