import React, { FC, ReactNode } from "react";
import Image from "next/image";

// interface ITagProps {
//   leftIcon: string;
//   rightIcon?: string;
//   title: string;
//   className?: string | undefined;
//   children?: React.ReactNode;
// }

// const Tag: FC<ITagProps> = ({
//   leftIcon,
//   title,
//   rightIcon,
//   className,
//   children,
// }) => {
//   return (
//     <button
//       className={`${className} text-xs mr-2 flex justify-start items-center p-1 border border-gray-100`}
//     >
//       <Image src={leftIcon} alt=""></Image>
//       <p>{title}</p>
//       {rightIcon && <Image src={rightIcon} alt=""></Image>}
//     </button>
//   );
// };

interface ITagProps {
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  title?: string;
  className?: string | undefined;
  children?: React.ReactNode;
}

const Tag: FC<ITagProps> = ({
  leftIcon,
  title,
  rightIcon,
  className,
  children,
}) => {
  return (
    <button
      className={`${className} text-xs mt-2 flex justify-start items-center py-1 px-2 border border-gray-200 rounded-lg  opacity-75 hover:bg-slate-100 hover:opacity-100 mr-2`}
    >
      {leftIcon}
      {title && <p className="ml-1">{title}</p>}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Tag;
