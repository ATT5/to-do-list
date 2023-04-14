"use strict";

const displayInbox = function () {
  const addTask = document.querySelector(".add-task");
  addTask.classList.toggle("active");

  const addBox = document.querySelector(".add-cancel");
  addBox.classList.toggle("active");
};

export default displayInbox;
