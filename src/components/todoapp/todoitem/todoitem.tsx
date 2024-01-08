"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import DateIcon from "../icons/DateIcon";
import RecurringIcon from "../icons/RecurringIcon";
import InboxIcon from "../icons/InboxIcon";
import CheckBox from "../button/checkbox";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { ITask } from "@/types";
import AddTask from "../addtask/addtask";
import TaskModal from "../addtask/taskmodal/taskmodal";

export type ITodoItem = {
  id?: number;
  title: string;
  description?: string;
  date: string;
  isRecurring?: boolean;
  isRoutine?: boolean;
  onEdit?: (newTaskName: string) => void;
  onDelete?: () => void;
  task: ITask;
  onCreate?: (newTask: ITask) => void;
};

const TodoItem: FC<ITodoItem> = ({
  title,
  description,
  date,
  isRecurring = false,
  onEdit,
  onDelete,
  task,
}) => {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`
        ${
          !isShowModal ? "flex" : "hidden"
        } items-center justify-between p-2 border-b border-b-gray-100`}
      >
        <div className="group flex flex-col items-start">
          <div className="flex">
            <input
              type="checkbox"
              className="peer h-5 w-5 mr-2 mt-1 cursor-pointer rounded-full"
            />
            <p className="text-sm mb-1 group-checked:line-through peer-checked:line-through">
              {title}
            </p>
          </div>
          <div className="ml-7">
            {description && (
              <p className="text-gray-600 text-xs mb-1">{description}</p>
            )}
            <button className="flex items-center text-orange-700">
              <DateIcon className="mr-1" />
              <p className="text-xs mr-0.5">{date}</p>
              {isRecurring && <RecurringIcon />}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center self-end text-xs">
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="mr-2 text-gray-500"
            >
              <EditIcon className="w-6" />
            </button>
            <button onClick={onDelete} className="text-red-500">
              <DeleteIcon className="w-6" />
            </button>
          </div>
          <div className="flex justify-between items-center self-end">
            <p className="mr-1 text-xs text-gray-500">Inbox</p>
            {<InboxIcon className="text-sky-600 w-4" />}
          </div>
        </div>
      </div>
      <TaskModal
        isShow={isShowModal}
        onHide={() => setShowModal(false)}
        editingTask={task}
        onEdit={(editingTask) => onEdit!(editingTask)}
      />
    </>
  );
};

export default TodoItem;
