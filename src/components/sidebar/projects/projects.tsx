"use client";
import React, { useContext, useEffect, useState } from "react";
import LinkButton from "../actions/linkbutton/linkbutton";
import Image from "next/image";
import plus from "@/assets/icons/plus.svg";
import arrow_down from "@/assets/icons/arrow-down.svg";
import hashtag from "@/assets/icons/hashtag.svg";
import { useViewContext } from "@/context/viewcontext";

import projectList from "@/data/test";
import { IProjects } from "@/types";

interface IProjectsProps {}

function Projects({}: IProjectsProps) {
  const [isCollapse, setCollapse] = useState(false);
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/projects");
        const jsonData = await response.json();
        setProjects(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {/* <LinkButton icon={hashtag} title="Home" number="4" /> */}
        {projects &&
          projects.map((project, index) => (
            <LinkButton
              icon={hashtag}
              key={index}
              title={project.name}
              number={project.tasks.length.toString()}
              to={"/projects/" + project.id.toString()}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
