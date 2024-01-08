"use client";
import React, { FC, useState, useEffect, useCallback } from "react";
import Header from "./header/header";
import Projects from "./projects/projects";
import Actions from "./actions/actions";

import Icon from "../../common/icon";

interface ISidebarProps {}

const Sidebar: FC<ISidebarProps> = ({}) => {
  const [isSidebarCollapse, setSidebarCollapse] = useState(true);

  const [isResizing, setResizing] = useState(false);
  const [minWidth, setMinWidth] = useState(300);
  const [maxWidth, setMaxWidth] = useState(450);
  const [sidebarWidth, setSidebarWidth] = useState(minWidth);

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
    [isResizing, minWidth, maxWidth]
  );

  const handleMouseUp = () => {
    setResizing(false);
  };

  useEffect(() => {
    const updateDimensions = () => {
      const windowWidth = window.innerWidth;
      setMinWidth(windowWidth * (1 / 6));
      // setSidebarWidth(windowWidth * (1 / 6));
      setMaxWidth(windowWidth * (1.5 / 6));
    };

    updateDimensions();

    // window.addEventListener("resize", updateDimensions);

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
    <>
      {!isSidebarCollapse && (
        <div className="absolute p-1 left-3 top-3 hover:bg-slate-200 rounded-md">
          <Icon
            item={{
              className: "ico-sidebar hover:cursor-pointer text-black-200",
              size: 24,
              onClick: () => setSidebarCollapse(!isSidebarCollapse),
            }}
          />
        </div>
      )}
      <div className={`${isSidebarCollapse ? "flex" : "hidden"} h-screen`}>
        <div
          className="px-2 bg-stone-100 h-full min-w-0 flex-shrink-0 relative"
          style={{ width: `${sidebarWidth}px` }}
        >
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header
              onSidebarClick={() => setSidebarCollapse(!isSidebarCollapse)}
            />
            <Actions />
            <Projects />
          </div>
          <div
            className={`absolute top-0 right-0 bottom-0 w-2 hover:bg-slate-200 cursor-col-resize`}
            onMouseDown={(e) => handleMouseDown(e)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
