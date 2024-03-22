import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import LinkedIn from "./images/Linkedin.svg";
import Github from "./images/Github.svg";
import Email from "./images/Email.svg";
import Flower from "./images/Flower.png";
import Button from "./Button";

const Contact: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div className="flex flex-col items-center pb-24">
      <h1 className=" text-4xl md:text-7xl text-center md:my-12">Contact Me</h1>
      <div className="px-8 py-16 sm:py-36 my-4 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-wrap gap-4 sm:gap-12 justify-around">
        <Link href="mailto:tmflower@gmail.com" target="_blank">
          <Image
            src={Email}
            alt="Email icon"
            width={screen.width < 460 ? 110 : 140}
            style={{ filter: "invert(70%)" }}
          ></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/tinaflower/" target="_blank">
          <Image
            src={LinkedIn}
            alt="LinkedIn icon"
            width={screen.width < 460 ? 110 : 140}
            style={{ filter: "invert(70%)" }}
          ></Image>
        </Link>

        <Link href="https://github.com/tmflower" target="_blank">
          <Image
            src={Github}
            alt="Github icon"
            width={screen.width < 460 ? 110 : 140}
            style={{ filter: "invert(70%)" }}
          ></Image>
        </Link>
      </div>
      <p className="text-center mt-4 filter">
        I built this portfolio with React, TypeScript, Tailwind, and NextJS.
      </p>
      <Link
        href="https://github.com/tmflower/portfolio"
        target="_blank"
        className="mt-2 hover:scale-110"
      >
        <Image
          src={Flower}
          alt="flower icon"
          width={20}
          className="inline mb-1 mx-1"
          style={{ filter: "invert(50%)" }}
        ></Image>
        See the repo
        <Image
          src={Flower}
          alt="flower icon"
          width={20}
          className="inline mb-1 ml-1"
          style={{ filter: "invert(50%)" }}
        ></Image>
      </Link>
			<Button onClick={goHome} className="md:text-xl">
        {"\u21E6"} Back
      </Button>
    </div>
  );
};

export default Contact;
