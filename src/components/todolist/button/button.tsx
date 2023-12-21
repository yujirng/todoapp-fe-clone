import React, { CSSProperties, FC, ReactNode } from "react";

interface IButtonProps {
  isDisable?: boolean;
  title?: string;
  className?: string | undefined;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  isDisable = false,
  title,
  className,
  rightIcon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        isDisable ? "opacity-75" : ""
      } py-2 px-3 rounded font-bold text-xs`}
      disabled={isDisable ? true : false}
    >
      <p>{title}</p>
      {rightIcon}
    </button>
  );
};

export default Button;
