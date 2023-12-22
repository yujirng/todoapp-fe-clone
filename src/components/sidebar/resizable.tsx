import React, { CSSProperties, FC, useEffect } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface IResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string | undefined;
}

const Resizable: FC<IResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if (direction === "horizontal") {
    resizableProps = {
      width: 300,
      height: Infinity,
      minConstraints: [window.innerWidth * (1 / 6), Infinity],
      maxConstraints: [window.innerWidth * (2 / 6), Infinity],
      handle: (
        <div className="h-full w-1 cursor-col-resize hover:bg-slate-200 "></div>
      ),
    };
  } else {
    resizableProps = {
      width: Infinity,
      height: 500,
      minConstraints: [Infinity, 500],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      handle: (
        <div className="h-full w-1 cursor-col-resize hover:bg-slate-200"></div>
      ),
    };
  }

  return (
    <ResizableBox
      className={`${direction === "horizontal" ? "flex" : ""}`}
      {...resizableProps}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
