import React, { FC } from "react";
import DateIcon from "../icons/DateIcon";
import RecurringIcon from "../icons/RecurringIcon";
import InboxIcon from "../icons/InboxIcon";
import CheckBox from "../button/checkbox";

type ITodoItem = {
  title: string;
  description?: string;
  date: string;
  isRecurring?: boolean;
  isRoutine?: boolean;
};

const TodoItem: FC<ITodoItem> = ({
  title,
  description,
  date,
  isRecurring = false,
  isRoutine = false,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-b-gray-100">
      <div className="flex items-start">
        {/* <input
          type="checkbox"
          className={`rounded-full mt-1 mr-2 border-2 cursor-pointer: ${
            isRoutine ? "border-blue-400" : "border-orange-400"
          }`}
        /> */}
        <button
          className={`relative rounded-full mt-1 mr-2 overflow-hidden w-5 h-5 border-2 cursor-pointer ${
            isRoutine ? "border-blue-400" : "border-orange-400"
          }`}
        >
          <CheckBox
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 hover:opacity-80 opacity-0 rounded-full ${
              isRoutine
                ? "bg-blue-200 text-blue-500"
                : "bg-orange-100 text-orange-500"
            }`}
          />
        </button>

        <div>
          <p className="text-sm mb-1">{title}</p>
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
      <div className="flex justify-between items-center self-end text-xs">
        <p className="mr-1 text-xs text-gray-500">Inbox</p>
        {<InboxIcon className="text-sky-600 w-4" />}
      </div>
    </div>
  );
};

export default TodoItem;
