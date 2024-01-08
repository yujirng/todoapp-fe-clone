import React, { FC } from "react";
import Category from "@/components/todoapp/category/category";
import TodoItem from "@/components/todoapp/todoitem/todoitem";
import Image from "next/image";
import silBvPn from "@/assets/icons/silBvPn.svg";
import option from "@/assets/icons/options.svg";
import AddTask from "@/components/todoapp/addtask/addtask";
import Sidebar from "../../components/sidebar/sidebar";
import { ITask } from "../../types";

interface ITodayProps {
  className?: string | undefined;
}

const Today: FC<ITodayProps> = ({ className }) => {
  return (
    <>
      <div className="w-5/6 pt-10 container px-72 mx-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h2 className="font-bold text-xl">Today</h2>
            <div className="flex items-center justify-start">
              <Image src={silBvPn} alt="" />
              <p className="ml-1 text-sm">2 tasks</p>
            </div>
          </div>
          <Image src={option} alt="" />
        </div>
        <Category title="Overdue" endButtonTitle="Reschedule">
          {/* <TodoItem setTasks={() => {}} task={} />
          <TodoItem
            title="Task 2"
            description="Get a personalized recommendation from Todoist"
            date="9 Dec"
            isRoutine={true}
          />
          <TodoItem title="Task 3" date="10 Dec" isRecurring={true} /> */}
        </Category>
        <Category title="21 Dec - Today - Thursday">
          {/* <TodoItem title="Test" date="Today" /> */}
        </Category>
      </div>
    </>
  );
};

export default Today;
