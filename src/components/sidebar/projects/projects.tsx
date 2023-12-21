"use client";
import React, { useState } from "react";
import LinkButton from "../actions/linkbutton/linkbutton";
import Image from "next/image";
import plus from "@/assets/icons/plus.svg";
import arrow_down from "@/assets/icons/arrow-down.svg";
import hashtag from "@/assets/icons/hashtag.svg";

function Projects() {
  const [isCollapse, setCollapse] = useState(false);

  return (
    <div>
      <button className="py-2 rounded-sm w-full flex items-center justify-between hover:bg-red-50 group">
        <p className="text-sm font-semibold ml-1">My Projects</p>
        <div className="flex">
          <Image
            src={plus}
            width={20}
            alt=""
            className="hidden group-hover:block"
          ></Image>
          <Image
            src={arrow_down}
            alt=""
            className="hidden group-hover:block"
            onClick={() => setCollapse(!isCollapse)}
          ></Image>
        </div>
      </button>
      <div className={isCollapse ? "hidden" : "block"}>
        <LinkButton icon={hashtag} title="Home" number="4" />
      </div>
    </div>
  );
}

export default Projects;
