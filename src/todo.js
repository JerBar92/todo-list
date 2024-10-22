//const { isThisHour } = require("date-fns");

import { project } from "./project";

export const toDo = (function () {
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const dueDate = document.querySelector("#date");
  const priorityLow = document.querySelector("#low");
  const priorityMedium = document.querySelector("#medium");
  const priorityHigh = document.querySelector("#high");
  const projectArray = project.listProjects();
  const taskDisplay = document.querySelector("#taskDisplay");

  function createToDo(title, description, dueDate, priority) {
    return {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
    };
  }

  const giveIndexProject = (event) => {
    let indexP = parseInt(event.target.id.split("-")[1]);
    return indexP;
  };

  const createTaskCard = (indexP, title, description, dueDate, priority) => {
    const newTask = createToDo(title, description, dueDate, priority);
    projectArray[indexP].todo.push(newTask);
    project.storeProject();
    clearTaskDisplay();
    displayTaskCard(indexP);
  };

  const displayTaskCard = (indexP) => {
    projectArray[indexP].todo.forEach((task, indexT) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "cardDiv";
      cardDiv.id = `cardDiv-${indexT}`;
      const titleDiv = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = task.title;
      titleDiv.appendChild(title);
      cardDiv.appendChild(titleDiv);
      const descriptionDiv = document.createElement("div");
      const description = document.createElement("p");
      description.textContent = task.description;
      descriptionDiv.appendChild(description);
      cardDiv.appendChild(descriptionDiv);
      const dateDiv = document.createElement("div");
      const date = document.createElement("p");
      date.textContent = task.dueDate;
      dateDiv.appendChild(date);
      cardDiv.appendChild(dateDiv);
      const taskPriorityDiv = document.createElement("div");
      const taskPriority = document.createElement("p");
      taskPriority.textContent = task.priority;
      if (task.priority === "Low") {
        taskPriority.style.color = "green";
      } else if (task.priority === "Medium") {
        taskPriority.style.color = "orange";
      } else {
        taskPriority.style.color = "red";
      }
      console.log(task.priority);
      taskPriorityDiv.appendChild(taskPriority);
      cardDiv.appendChild(taskPriorityDiv);
      const deleteTaskDiv = document.createElement("div");
      const deleteTask = document.createElement("button");
      deleteTask.textContent = "Delete";
      deleteTask.className = "deleteTask";
      deleteTask.id = `deleteTask-${indexT}`;
      deleteTask.addEventListener("click", (event) =>
        removeTaskCard(event, indexP)
      );
      deleteTaskDiv.appendChild(deleteTask);
      cardDiv.appendChild(deleteTaskDiv);
      taskDisplay?.appendChild(cardDiv);
    });
  };

  const removeTaskCard = (event, indexP) => {
    let indexT = parseInt(event.target.id.split("-")[1]);
    projectArray[indexP].todo.splice(indexT, 1);
    project.storeProject();
    clearTaskDisplay();
    displayTaskCard(indexP);
  };

  const clearNewTask = () => {
    const taskForm = document.querySelector("#taskForm");
    taskTitle.value = "";
    taskDescription.value = "";
    dueDate.value = "";
    priorityLow.checked = false;
    priorityMedium.checked = false;
    priorityHigh.checked = false;
    taskForm.close();
  };

  const clearTaskDisplay = () => {
    const cardDiv = document.querySelector(".cardDiv");
    if (!cardDiv) {
      return;
    } else {
      taskDisplay?.replaceChildren();
    }
  };

  return {
    createToDo,
    createTaskCard,
    giveIndexProject,
    clearTaskDisplay,
    clearNewTask,
    displayTaskCard,
  };
})();
