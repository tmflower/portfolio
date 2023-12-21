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
      className={`md:text-3xl border-none rounded-full px-4 py-1 mt-4 mb-8 hover:-translate-x-2 + hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
