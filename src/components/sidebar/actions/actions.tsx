import React, { useContext, useState } from "react";
import Button from "./linkbutton/linkbutton";
import addTask from "@/assets/icons/add.svg";
import search from "@/assets/icons/search.svg";
import inbox from "@/assets/icons/inbox.svg";
import today from "@/assets/icons/today.svg";
import calendar from "@/assets/icons/calendar.svg";
import category from "@/assets/icons/category.svg";
import { ViewContext, useViewContext } from "@/context/viewcontext";

function Actions() {
  const { updateView } = useViewContext();

  return (
    <div className="mb-3">
      <Button icon={addTask} title="Add task" />
      <Button icon={search} title="Search" />
      <Button icon={inbox} title="Inbox" />
      <Button icon={today} title="Today" onClick={() => updateView("today")} />
      <Button icon={calendar} title="Upcoming" />
      <Button icon={category} title="Filters & Labels" />
    </div>
  );
}

export default Actions;
