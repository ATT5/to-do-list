"use strict";

import { arrTask } from "./add-Task";
import { displayTask } from "./add-Task";
import { clearPage } from "./week-page";

const displayToday = function () {
  clearPage("Today");
  const date = new Date().getDate();
  displayTask(arrTask.filter((task) => task.day === date));
  const page = document.querySelector(".all-task ");
  page.classList.add("today");
  page.classList.remove("week");
};

export default displayToday;
