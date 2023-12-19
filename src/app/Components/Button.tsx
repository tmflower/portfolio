import { FunctionComponent } from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
}

const Button: FunctionComponent<ButtonProps> = ({
	children,
	onClick,
	className,

}) => {
	return (
		<button
		onClick={onClick}
		className={`button border-2 border-[#2d2d2d] dark:border-[#B9B7B7] hover:bg-[#b56576]/[.6] rounded-full px-4 py-1 mt-4 mb-8 + ${className}`}
	>
		{children}
	</button>
	);
};

export default Button;
