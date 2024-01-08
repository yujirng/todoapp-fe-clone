import React, {
  CSSProperties,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ITodoItem } from "../todoitem/todoitem";
import Category from "@/components/todoapp/category/category";
import TodoItem from "@/components/todoapp/todoitem/todoitem";
import Image from "next/image";
import silBvPn from "@/assets/icons/silBvPn.svg";
import option from "@/assets/icons/options.svg";
import AddTask from "@/components/todoapp/addtask/addtask";
import { IProjects, ITask } from "@/types";
import { formatDate } from "@/utils/functions";
import api, {
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "@/data/api";

import { createTask } from "@/data/api";

export interface ITodoList {
  id?: number;
  title: string;
  todos: ITodoItem[];
}

interface ITodoListProps {
  projects: IProjects;
  className?: string | undefined;
}

const TodoList: FC<ITodoListProps> = ({ projects, className }) => {
  const [tasks, setTasks] = useState<ITask[]>(projects.tasks);

  const handleCreateTask = async (newTask: ITask) => {
    try {
      const createdTask = await createTask(newTask);

      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleEditTask = async (id: number, newTaskName: string) => {
    try {
      const existingTask = await getTaskById(id);
      const updatedTask = { ...existingTask, name: newTaskName };
      await updateTask(id, updatedTask);
      const updatedTasks = await getAllTasks();
      // setTasks(updatedTasks);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, name: newTaskName } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      const updatedTasks = await getAllTasks();
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="w-5/6 pt-10 container px-72 mx-auto">
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="font-bold text-xl">{projects.name}</h2>
          <div className="flex items-center justify-start">
            <Image src={silBvPn} alt="" />
            <p className="ml-1 text-sm">{projects.tasks.length} tasks</p>
          </div>
        </div>
        <Image src={option} alt="" />
      </div>
      <Category key={projects.id} title={projects.name}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            title={task.name}
            date={formatDate(task.createDate.toString())}
            onEdit={(newTaskName) => handleEditTask(task.id, newTaskName)}
            onDelete={() => handleDeleteTask(task.id)}
            task={task}
          ></TodoItem>
        ))}
        <AddTask
          setTasks={setTasks}
          handleCreateTask={handleCreateTask}
          tasks={tasks}
          projectId={projects.id}
        />
      </Category>
    </div>
  );
};

export default TodoList;
