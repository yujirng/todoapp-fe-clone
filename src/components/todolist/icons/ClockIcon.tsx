import React, { CSSProperties, FC } from "react";
import { IIconProps } from "./types/IIconProps";

const ClockIcon: FC<IIconProps> = ({ className }) => {
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
        d="m2.414 4.706.094.093a.5.5 0 0 1-.707.708l-.094-.094a2 2 0 0 1 0-2.829l.379-.378a2 2 0 0 1 2.764-.062.5.5 0 0 1-.676.738 1 1 0 0 0-1.381.03l-.379.38a1 1 0 0 0 0 1.414Zm9.412-1.824a1 1 0 0 1 1.381.03l.379.38a1 1 0 0 1 0 1.414l-.094.093a.5.5 0 1 0 .707.708l.094-.094a2 2 0 0 0 0-2.829l-.379-.378a2 2 0 0 0-2.764-.062.5.5 0 1 0 .676.738Zm-.042 9.108A5.482 5.482 0 0 1 8 13.499a5.482 5.482 0 0 1-3.784-1.509l-1.362 1.362a.5.5 0 1 1-.708-.707l1.408-1.408a5.5 5.5 0 1 1 8.892 0l1.408 1.408a.5.5 0 0 1-.707.707l-1.363-1.362ZM8 12.499a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM8 5v3h2a.5.5 0 1 1 0 1H7.5a.5.5 0 0 1-.5-.5V5a.5.5 0 1 1 1 0Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default ClockIcon;
