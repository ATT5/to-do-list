"use strict";

//display box to add task
import displayInbox from "./display-inbox";

const addTask = document.querySelector(".add-task");
addTask.addEventListener("click", displayInbox);

//cancel task add
const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", displayInbox);

//add task

const addButton = document.querySelector(".add");
addButton.addEventListener("click", add_Button);

//inbox page
import { arrTask } from "./add-Task";
import { add_Button, displayTask } from "./add-Task";

const title = document.querySelector(".inbox-title");
const inbox = document.querySelector(".inbox");

inbox.addEventListener("click", function () {
  displayTask(arrTask);
  addTask.classList.add("active");
  title.textContent = "Inbox";
});

//today page
import displayToday from "./today-page";

const today = document.querySelector(".today");
today.addEventListener("click", displayToday);

//weeek page
import displayWeek from "./week-page";

const week = document.querySelector(".week");
week.addEventListener("click", displayWeek);

//saved task

import { loadTask } from "./add-Task";
window.onload = function () {
  loadTask();
};
console.log("i");
