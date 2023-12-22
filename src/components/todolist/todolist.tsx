"use client";
import React from "react";
import Category from "./category/category";
import TodoItem from "./todoitem/todoitem";
import Image from "next/image";
import silBvPn from "@/assets/icons/silBvPn.svg";
import option from "@/assets/icons/options.svg";
import AddTask from "./addtask/addtask";

import { ResizableBox } from "react-resizable";

import Today from "@/app/today/page";
import { useViewContext } from "@/context/viewcontext";

function TodoList() {
  const { view, updateView } = useViewContext();

  return (
    <>
      <button onClick={() => updateView("today")}>{view}</button>
      {view === "today" && <Today />}
      {view === "home" && <p>home</p>}
    </>
  );
}

export default TodoList;
