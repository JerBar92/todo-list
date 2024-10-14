export const project = (function () {
  function createProject(title, toDo) {
    return {
      title: title,
      toDo: toDo,
    };
  }
  return { createProject };
})();
