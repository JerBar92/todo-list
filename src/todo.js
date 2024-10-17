//const { isThisHour } = require("date-fns");

export const toDo = (function () {
  const todoArray = [];
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const date = document.querySelector("#date");
  const priorityLow = document.querySelector("#low");
  const priorityMedium = document.querySelector("#medium");
  const priorityHigh = document.querySelector("#high");
  const cancelTask = document.querySelector("#cancelTask");
  const addTask = document.querySelector("#addTask");

  function createToDo(title, description, dueDate, priority) {
    return {
      title: title,
      description: description,
      dusDate: dueDate,
      priority: priority,
    };
  }

  const createTaskCard = () => {};

  const displayTaskCard = (title, description, dueDate, priority, event) => {
    const newTask = createToDo(title, description, dueDate, priority);
    let index = parseInt(event.target.id.split("-")[1]);

    createTaskCard();
  };

  return { createToDo };
})();
