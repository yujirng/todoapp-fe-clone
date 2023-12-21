"use client";
import React, { CSSProperties, FC, useState } from "react";
import AddIcon from "../icons/AddIcon";
import Tag from "./tag/tag";
import Image from "next/image";
// import todayIcon from "@/assets/icons/today.svg";
// import priority from "@/assets/icons/priority.svg";
// import closeIcon from "@/assets/icons/close.svg";
// import clockIcon from "@/assets/icons/clock.svg";

import TodayIcon from "../icons/TodayIcon";
import PriorityIcon from "../icons/PriorityIcon";
import CloseIcon from "../icons/CloseIcon";
import ClockIcon from "../icons/ClockIcon";

import inboxIcon from "@/assets/icons/inbox.svg";

import Button from "../button/button";
import SelectButton from "../button/selectbutton";
import ThreeDotsIcon from "../icons/ThreeDots";
import InboxIcon from "../icons/InboxIcon";

interface IAddTaskProps {
  className?: string | undefined;
}

const AddTask: FC<IAddTaskProps> = ({ className }) => {
  const [isShowModal, setShowModal] = useState(false);

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
      <div className={`${isShowModal ? "block" : "hidden"}`}>
        <div className={`border border-gray-200 rounded-t-md p-2`}>
          <input
            type="text"
            className="focus:border-transparent focus:ring-0 h-3 w-full border-0 border-transparent text-sm font-bold"
            placeholder="Task name"
          />
          <input
            type="text"
            className="focus:border-transparent focus:ring-0 h-3 w-full border-0 border-transparent text-sm"
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
              onClick={() => setShowModal(!isShowModal)}
              className="mr-3 bg-neutral-100 hover:bg-neutral-200"
              title="Cancel"
            />
            <Button
              isDisable
              className="bg-red-400 text-white"
              title="Add task"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
