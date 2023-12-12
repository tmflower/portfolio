import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import Linkedin from "./images/Linkedin.png";
import Github from "./images/Github.png";

const Nav: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
	return (
		<ul className="nav flex flex-row justify-between items-center bg-[#6d597a] px-6 pt-1 w-screen">
			<li>
				<button
					onClick={goHome}
					className="flex flex-row text-xs md:text-2xl font-carter"
				>
					TINA FLOWER
				</button>
			</li>

			<li>
				<ul className="flex flex-row justify-between">
					<li className="py-4 px-4 md:px-8 text-xs md:text-xl">
						<Link href="mailto:tmflower@gmail.com">tmflower@gmail.com</Link>
					</li>
					<li className="flex flex-row py-4 px-4 md:px-8 text-xs md:text-xl">
						<Link href="https://www.linkedin.com/in/tinaflower/" target="_blank">
							<Image
								src={Linkedin}
								alt="linkedIn logo"
								width={20}
								style={{
									display: "inline",
									marginBottom: "4px",
									filter: "invert(70%)",
								}}
							></Image>{" "}
							/in/tmflower
						</Link>
					</li>
					<li className="py-4 px-4 md:px-8 text-xs md:text-xl">
						<Link href="https://github.com/tmflower" target="_blank">
							<Image
								src={Github}
								alt="github logo"
								width={20}
								style={{
									display: "inline",
									marginBottom: "4px",
									filter: "invert(70%)",
								}}
							></Image>{" "}
							/tmflower
						</Link>
					</li>
				</ul>
			</li>
		</ul>
	);
};
export default Nav;
