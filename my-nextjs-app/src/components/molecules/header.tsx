import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="text-center w-full fixed top-0 pb-4 border-b border-white">
      <div className="flex gap-4 mt-4 mr-4 justify-end">
        <Link href="https://www.linkedin.com/in/therachelmancini" passHref>
            <Button className="w-16 h-16">
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
        </Link>
        <Link href="https://github.com/therachelmancini" passHref>
            <Button className="w-16 h-16">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/rachel_mancini92"
          passHref
        >
            <Button className="w-16 h-16">
              <FontAwesomeIcon icon={faHackerrank} />
            </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
