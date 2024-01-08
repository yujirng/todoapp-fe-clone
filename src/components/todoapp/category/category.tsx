"use client";

import React, { CSSProperties, FC, useState } from "react";
import arrow_down from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

interface ICategoryProps {
  title: string;
  children?: React.ReactNode;
  endButtonTitle?: string;
  className?: CSSProperties;
}

const Category: FC<ICategoryProps> = ({
  className,
  title,
  children,
  endButtonTitle,
}) => {
  const [isCollapse, setCollapse] = useState(false);

  return (
    <section className="mb-10">
      <div
        className={`${
          className ?? className
        } flex justify-between items-center border-b border-b-gray-100`}
      >
        <div className="flex justify-center items-center">
          <Image
            src={arrow_down}
            alt=""
            onClick={() => setCollapse(!isCollapse)}
          ></Image>
          <p className="text-sm font-bold">{title}</p>
        </div>
        {endButtonTitle && (
          <button className=" text-orange-700 text-sm">{endButtonTitle}</button>
        )}
      </div>
      <div className={`${isCollapse ? "hidden" : "block"}`}>{children}</div>
    </section>
  );
};

export default Category;
