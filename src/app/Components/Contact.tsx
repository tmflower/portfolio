import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import LinkedIn from "./images/Linkedin.svg";
import Github from "./images/Github.svg";
import Email from "./images/Email.svg";

const Contact: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div className="flex flex-col items-center pb-24">
      <h1 className=" text-4xl md:text-7xl text-center md:my-12">Contact Me</h1>
      <div className="px-8 py-36 my-4 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-wrap gap-12 justify-around">
			  <Link href="mailto:tmflower@gmail.com" target="_blank">
          <Image src={Email} alt="Email icon" width={140} style={{filter: "invert(70%)"
                }}></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/tinaflower/" target="_blank">
          <Image src={LinkedIn} alt="LinkedIn icon" width={140} style={{filter: "invert(70%)"
                }}></Image>
        </Link>

        <Link href="https://github.com/tmflower" target="_blank">
          <Image src={Github} alt="Github icon" width={140} style={{filter: "invert(70%)"
                }}></Image>
        </Link>
      </div>
			<div>I built this portfolio with ... See the repo here...</div>
    </div>
  );
};

export default Contact;
