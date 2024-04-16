"use client";
import { useState, FunctionComponent, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import Card from "./Components/Card";
import Artifacts from "./Components/Artifacts";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ToggleOn from "../app/Components/images/ToggleOn.svg";
import ToggleOff from "../app/Components/images/ToggleOff.svg";
import Button from "./Components/Button";

const Home: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showArtifacts, setShowArtifacts] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else document.body.classList.remove("dark");
  }, [darkMode]);

  const goHome = () => {
    setShowArtifacts(false);
    setShowAbout(false);
    setShowContact(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Nav goHome={goHome}></Nav>
        <div className="h-screen mb-12 mx-4 sm:mx-12 md:mx-18 lg:mx-36">
          <div
            className={
              showArtifacts || showAbout || showContact
                ? `flex justify-between mt-4 pt-10`
                : `flex justify-end mt-4 pt-10`
            }
          >
            {showArtifacts || showAbout || showContact ? (
              <Button onClick={goHome} className="border-none md:text-xl">
                {"\u21E6"} More
              </Button>
            ) : null}

            <div className="flex flex-col">
              {darkMode ? (
                <button onClick={toggleDarkMode}>
                  <Image
                    src={ToggleOn}
                    width={60}
                    alt="toggle switch on"
                    style={{ filter: "invert(70%)" }}
                    className="hover:scale-105"
                  />
                </button>
              ) : (
                <button onClick={toggleDarkMode}>
                  <Image
                    src={ToggleOff}
                    width={60}
                    alt="toggle switch off"
                    className="hover:scale-105"
                  />
                </button>
              )}

              <p className="-mt-3 text-xs">Light/Dark</p>
            </div>
          </div>

          <Transition
            appear={true}
            show={showArtifacts}
            enter="transition-scale duration-700"
            enterFrom="transform scale-50 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leave="transition-scale duration-700"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-50 opacity-0 max-h-0"
          >
            <Artifacts goHome={goHome}></Artifacts>
          </Transition>

          <Transition
            appear={true}
            show={showAbout}
            enter="transition-scale duration-700"
            enterFrom="transform scale-50 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leave="transition-scale duration-700"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-50 opacity-0 max-h-0"
          >
            <About goHome={goHome}></About>
          </Transition>

          <Transition
            appear={true}
            show={showContact}
            enter="transition-scale duration-700"
            enterFrom="transform scale-50 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leave="transition-scale duration-700"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-50 opacity-0 max-h-0"
          >
            <Contact goHome={goHome}></Contact>
          </Transition>

          <Transition
            appear={true}
            show={!showArtifacts && !showAbout && !showContact}
            enter="transition-scale duration-700"
            enterFrom="transform scale-50 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leave="transition-scale duration-700"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-50 opacity-0 max-h-0"
          >
            <div className="flex flex-col sm:mt-20 sm:gap-4">
              <h1
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
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
          </Transition>

          <Transition
            appear={true}
            show={!showArtifacts && !showAbout && !showContact}
            enter="transition-scale duration-700"
            enterFrom="transform scale-50 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leave="transition-scale duration-700"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-50 opacity-0 max-h-0"
          >
            <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-8 mt-8 pb-8 md:mt-24">
              <Card
                className="bg-[#6d597a]"
                onClick={() => setShowArtifacts(true)}
              >
                Work
              </Card>

              <Card className="bg-[#b56576]" onClick={() => setShowAbout(true)}>
                About
              </Card>
              <Card
                className="bg-[#4c6e81] mb-16"
                onClick={() => setShowContact(true)}
              >
                Contact
              </Card>
            </div>
          </Transition>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
