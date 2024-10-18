//const { isThisHour } = require("date-fns");

import { project } from "./project";

export const toDo = (function () {
  const projectDisplay = document.querySelector("#projectDisplay");
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const dueDate = document.querySelector("#date");
  const priorityLow = document.querySelector("#low");
  const priorityMedium = document.querySelector("#medium");
  const priorityHigh = document.querySelector("#high");
  const cancelTask = document.querySelector("#cancelTask");
  const addTask = document.querySelector(".addTask");

  function createToDo(title, description, dueDate, priority) {
    return {
      title: title,
      description: description,
      dusDate: dueDate,
      priority: priority,
    };
  }

  const createTaskCard = () => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";
    const title = document.createElement("h3");
    title.textContent = taskTitle.value;
    cardDiv.appendChild(title);
    const description = document.createElement("p");
    description.textContent = `Description: ${taskDescription.value}`;
    cardDiv.appendChild(description);
    const date = document.createElement("p");
    date.textContent = dueDate.value;
    cardDiv.appendChild(date);
    const priority = document.createElement("p");
    if (priorityLow.checked) {
      priority.textContent = `Priority: Low`;
      cardDiv.appendChild(priority);
    } else if (priorityMedium.checked) {
      priority.textContent = "Priority: Medium";
      cardDiv.appendChild(priority);
    } else {
      priority.textContent = "Priority: High";
      cardDiv.appendChild(priority);
    }
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    cardDiv.appendChild(deleteTask);
    projectDisplay?.appendChild(cardDiv);
  };

  const displayTaskCard = (title, description, dueDate, priority) => {
    const newTask = createToDo(title, description, dueDate, priority);
    let index = parseInt(addTask.id.split("-")[1]);
    console.log(index);
    project.listProjects()[index].toDo.push(newTask);
    console.log(project.listProjects());
    createTaskCard();
  };

  addTask?.addEventListener("click", () => displayTaskCard);

  return { createToDo, displayTaskCard };
})();
