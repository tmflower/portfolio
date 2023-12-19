import { FunctionComponent } from "react";

interface CardProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
}

const Card: FunctionComponent<CardProps> = ({
	children,
	onClick,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={`w-64 h-40 xl:h-60 grow border-0 rounded-3xl mx-auto text-2xl md:text-4xl shadow-[#2d2d2d] shadow-lg dark:shadow-[#d8d8d8] dark:shadow-inner flex items-end justify-end pr-4 pb-2 hover:bg-[#2d2d2d] text-[#B9B7B7] brightness-150 dark:brightness-100 + ${className}`}
		>
			{children}
		</button>
	);
};

export default Card;
