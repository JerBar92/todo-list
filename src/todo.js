//const { isThisHour } = require("date-fns");

export const toDo = (function () {
  function createToDo(title, description, dueDate, priority) {
    return {
      title: title,
      description: description,
      dusDate: dueDate,
      priority: priority,
    };
  }

  return { createToDo };
})();
