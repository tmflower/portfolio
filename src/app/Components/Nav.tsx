import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import Linkedin from "./images/Linkedin.svg";
import Github from "./images/Github.svg";
import Flower from "./images/Flower.png";
import Email from "./images/Email.svg";
import NavItem from "./NavItem";

const Nav: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <ul className="nav flex flex-row justify-between items-center bg-[#6d597a] brightness-150 dark:brightness-100 px-6 pt-1 w-screen fixed -mt-4 z-10">
      <li>
        <button
          onClick={goHome}
          className="flex flex-row items-center text-sm md:text-2xl font-carter"
        >
          <Image
            src={Flower}
            alt="flower icon"
            width={30}
            style={{
              display: "inline",
              filter: "invert(70%)",
              marginRight: "12px",
              marginBottom: "4px",
            }}
          ></Image>
          TINA FLOWER
        </button>
      </li>

      <li>
        <ul className="flex flex-row justify-between items-end">
          <NavItem
            link="mailto:tmflower@gmail.com"
            img={Email}
            altText="email icon"
          ></NavItem>
          <NavItem
            link="https://www.linkedin.com/in/tinaflower/"
            img={Linkedin}
            altText="linkedIn logo"
          ></NavItem>
          <NavItem
            link="https://github.com/tmflower"
            img={Github}
            altText="github logo"
          ></NavItem>
        </ul>
      </li>
    </ul>
  );
};
export default Nav;
