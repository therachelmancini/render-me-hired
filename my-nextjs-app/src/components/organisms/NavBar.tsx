import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faTools,
  faBriefcase,
  faChartBar,
  faGraduationCap,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/button";

const navLinks = [
  { icon: faHome, href: "/" },
  { icon: faUser, href: "/about" },
  { icon: faTools, href: "/skills" },
  { icon: faBriefcase, href: "/projects" },
  { icon: faChartBar, href: "/experience" },
  { icon: faGraduationCap, href: "/education" },
  { icon: faEnvelope, href: "/contact" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="h-full fixed top-0 left-0 w-24 flex flex-col items-center py-9 border-r border-white">
      <h1 className="text-white text-center mb-6">
        <Link href="/">
          <span className="text-2xl font-bold">RM</span>
        </Link>
      </h1>
      <ul className="flex flex-col space-y-10 mt-10">
        {navLinks.map((link, index) => (
          <li key={index} className="text-white">
            <Link
              href={link.href}
              className="hover:text-gray-400 flex justify-end"
            >
              <Button  className="bg-teal-500 w-16 h-16">
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
