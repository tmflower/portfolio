import { FunctionComponent } from "react";

import content from "../content";
import Button from "./Button";

const About: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div className="flex flex-col items-center pb-24">
      <h1 className=" text-4xl md:text-7xl text-center md:my-12">About Me</h1>
      <div className="px-16 py-8 mt-4 my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
        <h2 className="text-3xl">In a Nutshell</h2>
        <div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
        <p className="py-6 text-sm sm:text-lg md:text-2xl">
          {content.about.summary}
        </p>
      </div>
      <div className="px-16 py-8 mt-4 my-12 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
        <h2 className="text-3xl">My Skills</h2>
        <div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
        <p className="py-6 text-sm sm:text-lg md:text-2xl">
          {content.about.skills.heading}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4 text-[#6d597a] brightness-150 dark:brightness-175">
          {content.about.skills.skills.map((s, i) => (
            <li key={i} className="text-sm sm:text-lg md:text-2xl">{s}</li>
          ))}
        </ul>
      </div>
      <div className="px-16 py-8 mt-4 my-12 md:my-12 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
        <h2 className="text-3xl">What I Value in a Work Environment</h2>
        <div className="w-full self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
        <p className="py-6 text-sm sm:text-lg md:text-2xl">
          {content.about.values.heading}
        </p>
        <ul className="flex flex-col list-disc mx-6">
          {content.about.values.values.map((v, i) => (
            <li key={i} className="text-sm sm:text-lg md:text-2xl py-3">{v}</li>
          ))}
        </ul>
      </div>
      <Button onClick={goHome} className="md:text-xl">
        {"\u21E6"} Back
      </Button>
    </div>
  );
};

export default About;
