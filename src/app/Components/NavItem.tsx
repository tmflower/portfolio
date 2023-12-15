import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
	children?: React.ReactNode;
	link: string;
	img: string;
	altText: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({
	link,
	img,
	altText,
	children
}) => {
	return (
		<li
		className="py-4 px-2 md:px-4"
		>
		<Link href={link} target="_blank">
              <Image
                src={img}
                alt={altText}
                height={20}
                style={{
                  filter: "invert(70%)",
                }}
              ></Image>
            </Link>
			{children}
	</li>
	);
};

export default NavItem;
