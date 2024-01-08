"use client";
import Sidebar from "@/components/sidebar/sidebar";
import { use, useEffect, useState } from "react";

import Image from "next/image";
import sidebarIcon from "@/assets/icons/sidebar.svg";
import { ViewProvider, useViewContext } from "@/context/viewcontext";
import TodoApp from "@/components/todoapp/todoapp";
import { IProjects } from "@/types";
import "@/vendors/myicons/dist/myicons.scss";
import Today from "./today/page";

export default function Home() {
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
    // <ViewProvider>
    //   <main>
    //     {
    //       // isSidebarCollapse &&
    //       <div className="absolute p-1 left-3 top-3 hover:bg-slate-200 rounded-md">
    //         <Image
    //           src={sidebarIcon}
    //           alt=""
    //           // onClick={() => setSidebarCollapse(!isSidebarCollapse)}
    //           className="hover:cursor-pointer"
    //         />
    //       </div>
    //     }
    //     <Sidebar />
    //   </main>
    // </ViewProvider>
    <Today />
  );
}
