import React, { CSSProperties, FC } from "react";
import { IIconProps } from "./types/IIconProps";

const CloseIcon: FC<IIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.854 11.854a.5.5 0 0 0 0-.707L8.707 8l3.147-3.146a.5.5 0 0 0-.708-.707L8 7.293 4.854 4.147a.5.5 0 1 0-.708.707L7.293 8l-3.147 3.147a.5.5 0 1 0 .708.707L8 8.708l3.146 3.146a.5.5 0 0 0 .708 0Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default CloseIcon;
