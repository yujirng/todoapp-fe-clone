import React, { CSSProperties, FC } from "react";
import { IIconProps } from "./types/IIconProps";

const AddIcon: FC<IIconProps> = ({ className }) => {
  return (
    <svg width="13" height="13" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
      ></path>
    </svg>
  );
};

export default AddIcon;
