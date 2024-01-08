"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import AddIcon from "../icons/AddIcon";

import { ITask } from "@/types";
import TaskModal from "./taskmodal/taskmodal";

interface IAddTaskProps {
  className?: string | undefined;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  handleCreateTask: (newTask: ITask) => void;
  projectId: number;
}

const AddTask: FC<IAddTaskProps> = ({
  className,
  tasks,
  setTasks,
  handleCreateTask,
  projectId,
}) => {
  const [isShowModal, setShowModal] = useState(false);

  const getNextId = () => {
    const maxId = Math.max(...tasks.map((task) => task.id), 0);
    return maxId + 1;
  };

  const handleAddTask = (newTaskName: string) => {
    const newTask: ITask = {
      id: getNextId(),
      name: newTaskName,
      isActive: true,
      createDate: new Date(),
      updateDate: new Date(),
      isDone: false,
      projectId: projectId,
    };

    // setTasks((prevTasks) => [...prevTasks, newTask]);
    handleCreateTask(newTask);
    setShowModal(!isShowModal);
  };

  return (
    <>
      <button
        className={`${className} ${
          !isShowModal ? "block" : "hidden"
        } py-1 px-2 flex items-center group w-full`}
        onClick={() => setShowModal(!isShowModal)}
      >
        <div className="p-0.5 group-hover:bg-orange-600 rounded-full">
          <AddIcon className=" group-hover:text-white" />
        </div>
        <p className="text-sm group-hover:text-orange-600 text-gray-600 ml-4 mt-0.5">
          Add task
        </p>
      </button>
      <TaskModal
        isShow={isShowModal}
        onHide={() => setShowModal(!isShowModal)}
        tasks={tasks}
        // setTasks={setTasks}
        handleAddTask={(newTaskName) => handleAddTask(newTaskName)}
        // onEdit={(id, newTaskName) => handleEditTask(id, newTaskName)}
      />
    </>
  );
};

export default AddTask;
