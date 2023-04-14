"use strict";

import { arrTask } from "./add-Task";
import { displayTask } from "./add-Task";
import { getWeekNumber } from "./add-Task";

const page = document.querySelector(".all-task");
const addTask = document.querySelector(".add-task");
const title = document.querySelector(".inbox-title");
const addBox = document.querySelector(".add-cancel");

const displayWeek = function () {
  clearPage("Week");
  const date = getWeekNumber(new Date());
  displayTask(arrTask.filter((task) => task.week === date));
  page.classList.add("week");
  page.classList.remove("today");
};

export function clearPage(pageTitle) {
  page.innerHTML = "";
  title.textContent = `${pageTitle}`;
  addTask.classList.remove("active");
  addBox.classList.remove("active");
}

export default displayWeek;
