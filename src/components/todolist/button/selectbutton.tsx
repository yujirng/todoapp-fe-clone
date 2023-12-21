import React, { CSSProperties, FC, ReactNode } from "react";
import caretDown from "@/assets/icons/caret-down.svg";
import Image from "next/image";

interface IButtonProps {
  className?: string | undefined;
  children: ReactNode;
}

const SelectButton: FC<IButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`${className} py-1 px-2 rounded hover:bg-neutral-100 flex justify-center items-center text-sm`}
    >
      {children}
      <Image className="ml-1" src={caretDown} alt=""></Image>
    </button>
  );
};

export default SelectButton;
