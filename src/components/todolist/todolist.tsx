import React from "react";
import Category from "./category/category";
import TodoItem from "./todoitem/todoitem";
import Image from "next/image";
import silBvPn from "@/assets/icons/silBvPn.svg";
import option from "@/assets/icons/options.svg";
import AddTask from "./addtask/addtask";

function TodoList() {
  return (
    <div className="w-5/6 pt-10 container px-56 mx-auto">
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
        <TodoItem title="Task 1" date="8 Dec" />
        <TodoItem
          title="Task 2"
          description="Get a personalized recommendation from Todoist"
          date="9 Dec"
          isRoutine={true}
        />
        <TodoItem title="Task 3" date="10 Dec" isRecurring={true} />
      </Category>
      <Category title="21 Dec - Today - Thursday">
        <TodoItem title="Test" date="Today" />
        <AddTask />
      </Category>
    </div>
  );
}

export default TodoList;
