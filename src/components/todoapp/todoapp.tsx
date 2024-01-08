"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Category from "./category/category";
import TodoItem from "./todoitem/todoitem";
import Image from "next/image";
import silBvPn from "@/assets/icons/silBvPn.svg";
import option from "@/assets/icons/options.svg";
import AddTask from "./addtask/addtask";

import { ResizableBox } from "react-resizable";

import Today from "@/app/today/page";
import { useViewContext } from "@/context/viewcontext";
import projectData, { IProjectList } from "@/data/test";
import TodoList from "./todolist/todolist";
import { IProjects } from "@/types";

interface ITodoAppProps {
  project_id: string;
}

function TodoApp({ project_id }: ITodoAppProps) {
  const [project, setProject] = useState<IProjects>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/projects/" + project_id + "/"
        );
        const jsonData = await response.json();
        setProject(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [project_id]);

  return <>{project && <TodoList projects={project!} />}</>;
}

export default TodoApp;
