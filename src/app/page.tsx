"use client";
import { useState, FunctionComponent, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ToggleOff from "../app/Components/images/ToggleOff.png";
import ToggleOn from "../app/Components/images/ToggleOn.png";

import Card from "./Components/Card";
import Artifact from "./Components/Artifact";
import Nav from "./Components/Nav";

const Home: FunctionComponent = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [showArtifacts, setShowArtifacts] = useState(false);
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
				<div className={`h-screen mb-12 mx-12 md:mx-18`}>
					<div className="flex flex-col items-end mt-4">
						{darkMode ? (
							<button onClick={toggleDarkMode}>
								<Image
									src={ToggleOn}
									width={60}
									alt="toggle switch on"
									style={{ filter: "invert(100%)" }}
								/>
							</button>
						) : (
							<button onClick={toggleDarkMode}>
								<Image src={ToggleOff} width={60} alt="toggle switch off" />
							</button>
						)}

						<p className="-mt-3 text-xs">Light/Dark</p>
					</div>
					<div className="flex flex-col sm:mt-20 sm:gap-4">
						<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
							TINA FLOWER
						</h1>
						<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
							Software Engineer
						</h2>
					</div>

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
						<Card className="bg-[#4c6e81]" onClick={() => setShowContact(true)}>
							Contact
						</Card>
					</div>
					{showArtifacts ? <Artifact></Artifact> : null}
				</div>
			</main>
		</>
	);
};

export default Home;
