import React, { FC, useState, useEffect } from "react";

import { ITask } from "@/types";
import Button from "../../button/button";
import SelectButton from "../../button/selectbutton";
import ClockIcon from "../../icons/ClockIcon";
import CloseIcon from "../../icons/CloseIcon";
import InboxIcon from "../../icons/InboxIcon";
import PriorityIcon from "../../icons/PriorityIcon";
import ThreeDotsIcon from "../../icons/ThreeDots";
import TodayIcon from "../../icons/TodayIcon";
import Tag from "../tag/tag";

interface ITaskModalProps {
  isShow: boolean;
  onHide: () => void;
  tasks?: ITask[];
  handleAddTask?: (newTaskName: string) => void;
  onEdit?: (newTaskName: string) => void;
  editingTask?: ITask | null;
}

const TaskModal: FC<ITaskModalProps> = ({
  isShow,
  onHide,
  onEdit,
  editingTask,
  handleAddTask,
}) => {
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (editingTask) setTaskName(editingTask.name);
  }, [editingTask]);

  const handleCloseModal = () => {
    onHide();
    setTaskName("");
  };

  return (
    <div className={`${isShow ? "block" : "hidden"}`}>
      <div className={`border border-gray-200 rounded-t-md p-2`}>
        <input
          type="text"
          className="focus:border-transparent focus:ring-0 h-3 w-full border-0 border-transparent text-sm font-bold outline-none"
          placeholder="Task name"
          onChange={(e) => setTaskName(e.target.value)}
          value={`${taskName}`}
        />
        <input
          type="text"
          className="focus:border-transparent focus:ring-0 h-3 w-full border-0 border-transparent text-sm outline-none"
          placeholder="Description"
        />
        <div className="px-2 py-1 flex">
          <Tag
            className="text-green-600"
            leftIcon={<TodayIcon />}
            title="Today"
            rightIcon={<CloseIcon />}
          />
          <Tag leftIcon={<PriorityIcon />} title="Priority" />
          <Tag leftIcon={<ClockIcon />} title="Reminders" />
          <Tag leftIcon={<ThreeDotsIcon />}></Tag>
        </div>
      </div>
      <div
        className={`p-2 flex justify-between items-center border-x border-b rounded-b-md border-t-gray-100`}
      >
        <SelectButton>
          {/* <Image className="w-4 mr-1" src={inboxIcon} alt="" /> */}
          <InboxIcon className="w-5 mr-1 text-blue-800" />
          <p>Inbox</p>
        </SelectButton>
        <div className="flex items-center">
          <Button
            // onClick={() => setShowModal(!isShowModal)}
            onClick={handleCloseModal}
            className="mr-3 bg-neutral-100 hover:bg-neutral-200"
            title="Cancel"
          />
          <Button
            isDisable={!taskName}
            className="bg-red-400 text-white"
            title={!editingTask ? "Add task" : "Edit"}
            onClick={() => {
              if (editingTask && onEdit) {
                onEdit(taskName);
              } else {
                handleAddTask!(taskName);
              }
              handleCloseModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
