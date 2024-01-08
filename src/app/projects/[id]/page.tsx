"use client";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { ViewProvider, useViewContext } from "../../../context/viewcontext";
import { useRouter } from "next/router";
import Sidebar from "../../../components/sidebar/sidebar";
import Image from "next/image";
import { IProjects } from "../../../types";
import sidebarIcon from "@/assets/icons/sidebar.svg";
import TodoApp from "../../../components/todoapp/todoapp";
import { json } from "stream/consumers";
import TodoList from "../../../components/todoapp/todolist/todolist";
import { getAllProjects, getAllTasks } from "../../../data/api";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

const ProjectDetail: FC<ProjectDetailProps> = ({ params }) => {
  const [isSidebarCollapse, setSidebarCollapse] = useState(false);

  const project_id = params.id;

  return (
    <ViewProvider>
      {isSidebarCollapse && (
        <div className="absolute p-1 left-3 top-3 hover:bg-slate-200 rounded-md">
          <Image
            src={sidebarIcon}
            alt=""
            onClick={() => setSidebarCollapse(!isSidebarCollapse)}
            className="hover:cursor-pointer "
          />
        </div>
      )}
      <TodoApp project_id={project_id} />
    </ViewProvider>
  );
};

export default ProjectDetail;
