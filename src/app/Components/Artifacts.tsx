import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import Artifact from "./Artifact";
import Button from "./Button";
import content from "../content";
import staticHp from "./images/staticHp.png";
import staticHpMobile from "./images/staticHpMobile.png";
import staticHpNosw from "./images/staticHpNosw.png";
import staticHpSp from "./images/staticHpSp.png";
import staticHpSpNosw from "./images/staticHpSpNosw.png";
import checkingPremier from "./images/checkingPremier.png";
import beforeFix from "./images/beforeFix.png";
import afterFix from "./images/afterFix.png";
import feedback from "./images/feedback.png";
import feedbackMobile from "./images/feedbackMobile.png";
import heartbeats from "./images/heartbeats.png";
import heartbeatsMobile from "./images/heartbeatsMobile.png";
import carehub from "./images/carehub.png";
import notifications from "./images/notifications.png";
import messages from "./images/messages.png";
import updateProfile from "./images/updateProfile.png";
import caregivers from "./images/caregivers.png";

const Artifacts: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div className="flex flex-col items-center pb-24">
			            <div className="flex flex-col sm:mt-20 sm:gap-4">
              <h1
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center"
                style={{ textShadow: "2px 2px 6px #4c6e81" }}
              >
                TINA FLOWER
              </h1>
              <h2
                className="textShadow text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ textShadow: "2px 2px 6px #4c6e81" }}
              >
                Software Engineer
              </h2>
            </div>
      <h1 className=" text-md md:text-2xl text-center mt-10">Welcome! Please scroll down to see examples of my development work</h1>
      <div className="w-full flex flex-col items-center">
        <Artifact
          title={content.artifact1.title}
          employer={content.artifact1.employer}
          summary={content.artifact1.summary}
          imgLaptop={staticHp}
          altText="Wells Fargo homepage laptop view"
          techStack={content.artifact1.techStack}
          link=""
        >
          <div className="w-4/5 self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="flex flex-col max-w-[260px]">
              <p className="text-center text-lg pb-2">
                English language with signon capability
              </p>
              <Image
                src={staticHpMobile}
                alt="Wells Fargo homepage mobile view"
                width="260"
              ></Image>

              <Link
                className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-full self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
                href="https://www.wellsfargo.com/static/home.htm"
                target="_blank"
              >
                Visit page
              </Link>
            </div>
            <div className="flex flex-col max-w-[260px]">
              <p className="text-center text-lg pb-2">
                English language without signon capability
              </p>
              <Image
                src={staticHpNosw}
                alt="Wells Fargo homepage mobile view without signon option"
                width="260"
              ></Image>

              <Link
                className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-full self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
                href="https://www.wellsfargo.com/static/home_nosw.htm"
                target="_blank"
              >
                Visit page
              </Link>
            </div>
            <div className="flex flex-col max-w-[260px]">
              <p className="text-center text-lg pb-2">
                Spanish language with signon capability
              </p>
              <Image
                src={staticHpSp}
                alt="Wells Fargo homepage Spanish mobile view"
                width="260"
              ></Image>

              <Link
                className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-full self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
                href="https://www.wellsfargo.com/static/spanish/home.htm"
                target="_blank"
              >
                Visit page
              </Link>
            </div>
            <div className="flex flex-col max-w-[260px]">
              <p className="text-center text-lg pb-2">
                Spanish language without signon capability
              </p>
              <Image
                src={staticHpSpNosw}
                alt="Wells Fargo homepage Spanish mobile view without signon option"
                width="260"
              ></Image>

              <Link
                className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-full self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
                href="https://www.wellsfargo.com/static/spanish/home_nosw.htm"
                target="_blank"
              >
                Visit page
              </Link>
            </div>
          </div>
        </Artifact>
        <Button onClick={goHome} className="md:text-xl">
          {"\u21E6"} Back
        </Button>
      </div>

      <div className="w-full flex flex-col items-center">
        <Artifact
          title={content.artifact2.title}
          employer={content.artifact2.employer}
          summary={content.artifact2.summary}
          imgLaptop={checkingPremier}
          imgMobile1={beforeFix}
          imgMobile2={afterFix}
          caption1="Before fix"
          caption2="After fix"
          altText="Wells Fargo Premier Checking page laptop view"
          techStack={content.artifact2.techStack}
          link={content.artifact2.link}
        ></Artifact>

        <Button onClick={goHome} className="md:text-xl">
          {"\u21E6"} Back
        </Button>
      </div>

      <div className="w-full flex flex-col items-center">
        <Artifact
          title={content.artifact3.title}
          employer={content.artifact3.employer}
          summary={content.artifact3.summary}
          imgLaptop={feedback}
          imgMobile1={feedbackMobile}
          altText="Close up of new feedback component on Wells Fargo Home Mortgage Loan page"
          techStack={content.artifact3.techStack}
          link={content.artifact3.link}
        ></Artifact>

        <Button onClick={goHome} className="md:text-xl">
          {"\u21E6"} Back
        </Button>
      </div>

      <div className="w-full flex flex-col items-center">
        <Artifact
          title={content.artifact4.title}
          employer={content.artifact4.employer}
          summary={content.artifact4.summary}
          imgLaptop={heartbeats}
          imgMobile1={heartbeatsMobile}
          altText="Heartbeats landing page"
          techStack={content.artifact4.techStack}
          link={content.artifact4.link}
        >
        </Artifact>

        <Button onClick={goHome} className="md:text-xl">
          {"\u21E6"} Back
        </Button>
      </div>

      <div className="w-full flex flex-col items-center">
        <Artifact
          title={content.artifact5.title}
          employer={content.artifact5.employer}
          summary={content.artifact5.summary}
          imgLaptop={carehub}
          altText="Carehub dashboard view"
          techStack={content.artifact5.techStack}
          link={content.artifact5.link}
        >
          <div className="w-4/5 self-center h-[1px] bg-[#6d597a] brightness-200 mb-6 mt-2"></div>
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col max-w-[460px]">
              <p className="text-center text-lg pb-2">
                Notifications feature displaying empty state
              </p>
              <Image
                src={notifications}
                alt="notifications feature"
                width="460"
              ></Image>
            </div>
            <div className="flex flex-col max-w-[460px]">
              <p className="text-center text-lg pb-2">Update profile form</p>
              <Image
                src={updateProfile}
                alt="update profile form"
                width="460"
              ></Image>
            </div>
            <div className="flex flex-col max-w-[360px]">
              <p className="text-center text-lg pb-2">
                Messaging feature keeps a running record of text communications
                for each user
              </p>
              <Image src={messages} alt="messaging feature" width="360"></Image>
            </div>
            <div className="flex flex-col max-w-[360px]">
              <p className="text-center text-lg pb-2">
                Example of a form used for case management, featuring use of
                reusable, dynamic tabs component
              </p>
              <Image src={caregivers} alt="caregivers form" width="360"></Image>
            </div>
          </div>
          <Link
            className="btnSmall dark:border-[#B9B7B7] rounded-full px-4 py-1 mt-4 mb-8 w-[260px] self-center mt-8 bg-[#4c6e81]/[.7] brightness-150 hover:bg-[#4c6e81] border-none shadow-xl text-lg text-center"
            href="https://care.missingpiecesgrief.org/"
            target="_blank"
          >
            Visit page
          </Link>
        </Artifact>

        <Button onClick={goHome} className="md:text-xl">
          {"\u21E6"} Back
        </Button>
      </div>
    </div>
  );
};

export default Artifacts;
