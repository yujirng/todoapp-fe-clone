"use client";
import Sidebar from "@/components/sidebar/sidebar";
import TodoList from "@/components/todolist/todolist";
import { useState } from "react";

import Image from "next/image";
import sidebarIcon from "@/assets/icons/sidebar.svg";
import { ViewProvider, useViewContext } from "@/context/viewcontext";

export default function Home() {
  const [isSidebarCollapse, setSidebarCollapse] = useState(false);

  return (
    <ViewProvider>
      <main className="flex h-screen">
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
        <Sidebar
          isSidebarCollapse={isSidebarCollapse}
          setSidebarCollapse={() => setSidebarCollapse(!isSidebarCollapse)}
        />
        <TodoList />
      </main>
    </ViewProvider>
  );
}
