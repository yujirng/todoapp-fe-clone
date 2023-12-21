import React, { FC, useState, useRef, useEffect } from "react";
import Header from "./header/header";
import Projects from "./projects/projects";
import Actions from "./actions/actions";
import Image from "next/image";

import sidebar from "@/assets/icons/sidebar.svg";

interface ISidebarProps {
  isSidebarCollapse?: boolean;
  setSidebarCollapse: () => void;
}

const Sidebar: FC<ISidebarProps> = ({
  isSidebarCollapse,
  setSidebarCollapse,
}) => {
  return (
    <div
      className={`${
        !isSidebarCollapse ? "block" : "hidden"
      } w-1/6 px-2 bg-stone-100 relative`}
    >
      <Header onSidebarClick={setSidebarCollapse} />
      <Actions />
      <Projects />
      <div className="cursor-s-resize absolute"></div>
    </div>
  );
};

export default Sidebar;
