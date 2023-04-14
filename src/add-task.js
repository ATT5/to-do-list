"use strict";

import Task from "./creat-task";
import displayInbox from "./display-inbox";

export let arrTask = [];

export function add_Button() {
  const input = document.querySelector(".task-title");
  const date = document.querySelector(".date").value;
  const week = getWeekNumber(new Date(date.replace(/-/g, "/")));
  const day = new Date(date.replace(/-/g, "/")).getDate();

  if (input.value === "" || !date) {
    alert("Add task name or date");
    return;
  } else {
    const newTask = new Task(input.value, date, day, week);
    add(newTask);
    input.value = "";
  }
}

function add(newTask) {
  arrTask.push(newTask);
  displayTask(arrTask);
  displayInbox();
  saveListTask();
}

const page = document.querySelector(".all-task");

export function displayTask(array) {
  page.innerHTML = "";
  array.forEach((task) => {
    page.insertAdjacentHTML(
      "afterbegin",
      `<div class='task'><input class='radio' data-id='${task.name}' type='radio'><p>${task.name}</p><div class='task-date'>${task.date}</div></div>`
    );
  });
  const radios = document.querySelectorAll(".radio");
  radios.forEach((radio) => {
    radio.addEventListener("click", function () {
      deleteTask(this);
    });
  });
}

function deleteTask(el) {
  const page = document.querySelector(".all-task ");
  const taskName = el.dataset.id;
  const newArrayTask = arrTask.filter((task) => task.name !== taskName);
  arrTask = newArrayTask;

  if (page.classList.contains("today")) {
    const date = new Date().getDate();
    displayTask(arrTask.filter((task) => task.day === date));
  } else if (page.classList.contains("week")) {
    const date = getWeekNumber(new Date());
    displayTask(arrTask.filter((task) => task.week === date));
  } else {
    displayTask(arrTask);
  }
  saveListTask();
}
/////////////
export function getWeekNumber(date) {
  let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  let daysSinceFirstDayOfYear = Math.floor(
    (date - firstDayOfYear) / (24 * 60 * 60 * 1000)
  );
  return Math.ceil((daysSinceFirstDayOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export default add;

//save task
function saveListTask() {
  let taskList;
  taskList = arrTask;
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

// Load list items from local storage
export function loadTask() {
  let listItems = JSON.parse(localStorage.getItem("taskList"));
  console.log(listItems);
  if (listItems) arrTask = listItems;
  if (listItems) displayTask(arrTask);
}
