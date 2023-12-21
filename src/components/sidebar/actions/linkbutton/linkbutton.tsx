import Link from "next/link";
import React from "react";
import Image from "next/image";

type ButtonProps = {
  icon: string;
  title: string;
  number?: string;
  to?: string;
};

function Button({ icon, title, number, to }: ButtonProps) {
  return (
    <Link
      href={to ?? ""}
      className={`rounded-sm hover:bg-red-50 cursor-pointer py-2 px-2 flex justify-between items-center`}
    >
      <div className="flex items-center">
        {<Image src={icon} alt="" className="mr-1" />}
        <p className="text-sm">{title}</p>
      </div>
      <p className="text-sm">{number}</p>
    </Link>
  );
}

export default Button;
