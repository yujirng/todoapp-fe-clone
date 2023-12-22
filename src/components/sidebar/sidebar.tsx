import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import Header from "./header/header";
import Projects from "./projects/projects";
import Actions from "./actions/actions";
import Image from "next/image";

import sidebar from "@/assets/icons/sidebar.svg";

import Resizable from "./resizable";

interface ISidebarProps {
  isSidebarCollapse?: boolean;
  setSidebarCollapse: () => void;
}

const Sidebar: FC<ISidebarProps> = ({
  isSidebarCollapse,
  setSidebarCollapse,
}) => {
  const [isResizing, setResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const minWidth = 100;
  const maxWidth = 500;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setResizing(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = Math.min(Math.max(e.clientX, minWidth), maxWidth);

        setSidebarWidth(newWidth);
      }
    },
    [isResizing]
  );

  const handleMouseUp = () => {
    setResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, handleMouseMove]);

  return (
    /**
     * react-resizable
     */

    // <Resizable direction="horizontal">
    //   <div
    //     className={`${
    //       !isSidebarCollapse ? "block" : "hidden"
    //     } px-2 bg-stone-100 relative h-full w-full`}
    //   >
    //     <Header onSidebarClick={setSidebarCollapse} />
    //     <Actions />
    //     <Projects />
    //   </div>
    // </Resizable>

    /**
     * test
     */

    <div className="flex h-screen">
      <div
        className="px-2 bg-stone-100 h-full min-w-0 flex-shrink-0 relative"
        style={{ width: `${sidebarWidth}px` }}
      >
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <Actions />
          <Projects />
        </div>
        <div
          className={`absolute top-0 right-0 bottom-0 w-2 hover:bg-slate-200 cursor-col-resize`}
          onMouseDown={(e) => handleMouseDown(e)}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
