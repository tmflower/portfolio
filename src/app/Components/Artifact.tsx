import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArtifactProps {
  children?: React.ReactNode;
  title?: string;
  imgLaptop?: {};
  imgMobile1?: {};
  imgMobile2?: {};
  caption1?: string;
  caption2?: string;
  altText: string;
  employer?: string;
  summary?: string;
  techStack?: string;
  link?: string;
}

const Artifact: FunctionComponent<ArtifactProps> = ({
  children,
  title,
  imgLaptop,
  imgMobile1,
  imgMobile2,
  caption1,
  caption2,
  altText,
  employer,
  summary,
  techStack,
  link,
}) => {
  return (
    <div className="p-8 my-6 md:my-20 md:w-4/5 bg-[#f5f2f2] dark:bg-[#575656] border-0 shadow-[0_35px_60px_-15px] dark:shadow-none dark:border-[1px] dark:border-[#B9B7B7] rounded-xl flex flex-col">
      <h3 className="text-2xl md:text-4xl mb-4 font-bold text-center">
        {title}
      </h3>
      <div className="w-4/5 self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
      <p className="md:text-2xl mb-2 font-semibold mx-8 xl:mx-40">
        Employer: <span className="font-normal">{employer}</span>
      </p>
      <p className="md:text-2xl font-semibold mx-8 xl:ml-40">
        Tech Stack: <span className="font-normal">{techStack}</span>
      </p>

      <Image
        className="self-center"
        src={imgLaptop as string}
        alt={altText as string}
        width={800}
      ></Image>
      <p className="py-6 xl:px-24 text-sm md:text-xl mx-8">{summary}</p>

      <div className="flex flex-wrap items-center place-content-center gap-8">
        {imgMobile1 ? (
          <div className="">
            <Image
              src={imgMobile1 as string}
              alt={altText as string}
              width={300}
            ></Image>
            <p className="text-center text-xl">{caption1}</p>
          </div>
        ) : null}
        {imgMobile2 ? (
          <div className="">
            <Image
              src={imgMobile2 as string}
              alt={altText as string}
              width={300}
            ></Image>
            <p className="text-center text-xl">{caption2}</p>
          </div>
        ) : null}
      </div>
      {link && (
        <Link
          className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-[260px] self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
          href={link as string}
          target="_blank"
        >
          Visit page
        </Link>
      )}
      {children}
    </div>
  );
};

export default Artifact;
