import { FunctionComponent } from "react";

import content from "../content";
import Button from "./Button";

const About: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div className="flex flex-col items-center pb-24">
			      <h1 className=" text-4xl md:text-7xl text-center md:my-12">
        About Me
      </h1>
			    <div className="p-8 my-4 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
			<h2 className="text-3xl">In a Nutshell</h2>
			<div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
			<p className="py-6 md:px-12 text-sm md:text-2xl">{content.about.summary}</p>
			</div>
			<div className="p-8 my-4 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
			<h2 className="text-3xl">My Skills</h2>
			<div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
			<p className="py-6 md:px-12 text-sm md:text-2xl">{content.about.skills.heading}</p>
			<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-12">
				{content.about.skills.skills.map(s => <li className="md:px-12 text-sm md:text-2xl">{s}</li> )}
			</ul>
			{/* <p className="py-6 md:px-24 text-sm md:text-xl mx-4 md:mx-20">{content.about.skills}</p> */}
			</div>
			<div className="p-8 my-4 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
			<h2 className="text-3xl">What I Value in a Work Environment</h2>
			<div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
			<p className="py-6 md:px-12 text-sm md:text-2xl">{content.about.values.heading}</p>
			<ul className="flex flex-col list-disc mx-4 md:mx-24">
				{content.about.values.values.map(s => <li className="text-sm md:text-2xl py-3">{s}</li> )}
			</ul>
			</div>
			<Button onClick={goHome} className="">
          ← Back
        </Button>
    </div>
  );
};

export default About;
