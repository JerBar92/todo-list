//const { isThisHour } = require("date-fns");

import { project } from "./project";

export const toDo = (function () {
  const projectDisplay = document.querySelector("#projectDisplay");
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const dueDate = document.querySelector("#date");
  const priority = document.querySelector(`input[name=priority]:checked`);
  const priorityLow = document.querySelector("#low");
  const priorityMedium = document.querySelector("#medium");
  const priorityHigh = document.querySelector("#high");
  const cancelTask = document.querySelector("#cancelTask");
  const addTask = document.querySelector(".addTask");
  const projectName = document.querySelector("#projectName");
  const newTaskBtn = document.querySelector(".newTaskBtn");
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
    console.log(project.listProjects());
    clearTaskDisplay();
    displayTaskCard(indexP);
  };

  const displayTaskCard = (indexP) => {
    projectArray[indexP].todo.forEach((task, indexT) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "cardDiv";
      cardDiv.id = `cardDiv${indexT}`;
      const title = document.createElement("h3");
      title.textContent = task.title;
      cardDiv.appendChild(title);
      const description = document.createElement("p");
      description.textContent = task.description;
      cardDiv.appendChild(description);
      const date = document.createElement("p");
      date.textContent = task.dueDate;
      cardDiv.appendChild(date);
      const taskPriority = document.createElement("p");
      taskPriority.textContent = task.priority;
      cardDiv.appendChild(taskPriority);
      const deleteTask = document.createElement("button");
      deleteTask.textContent = "Delete";
      deleteTask.className = "deleteTask";
      deleteTask.id = `deleteTask${indexT}`;
      deleteTask.addEventListener("click", removeTaskCard);
      cardDiv.appendChild(deleteTask);
      taskDisplay?.appendChild(cardDiv);
    });
  };

  const removeTaskCard = (event, indexP) => {
    let indexT = parseInt(event.target.id.split("-")[1]);
    projectArray[indexP].todo[indexT].splice(indexT, 1);
    const cardDiv = document.querySelectorAll(".cardDiv");
    cardDiv.forEach((div) => taskDisplay?.removeChild(div));
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

  addTask?.addEventListener("click", (event) => {
    let indexP = giveIndexProject(event);
    createTaskCard(
      indexP,
      taskTitle.value,
      taskDescription.value,
      dueDate.value,
      priority.value
    );
    clearNewTask();
  });

  return {
    createToDo,
    createTaskCard,
    giveIndexProject,
    clearTaskDisplay,
    clearNewTask,
  };
})();
