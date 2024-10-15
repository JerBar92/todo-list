export const project = (function () {
  const projectArray = [];

  function projects(title, toDo) {
    return {
      title: title,
      toDo: toDo,
    };
  }

  const listProjects = () => projectArray;

  const createProject = () => {
    const projectList = document.querySelector("#projectList");
    const projectDiv = document.createElement("div");
    const projectAdd = document.createElement("li");
    const projectRemove = document.createElement("button");
    projectArray.forEach((project, index) => {
      projectAdd.textContent = project.title;
      projectRemove.textContent = "Remove";
      projectRemove.id = `projectRemove${index}`;
      projectDiv.id = `projectDiv${index}`;
      projectDiv.appendChild(projectAdd);
      projectDiv.appendChild(projectRemove);
      projectList?.appendChild(projectDiv);

      /*projectRemove.addEventListener("click", () => {
        projectArray.splice(index, 1);
      });*/
    });
    console.log(projectArray);
  };

  const displayProjectList = (title, toDo) => {
    const newProject = projects(title, toDo);
    projectArray.push(newProject);
    createProject();
  };

  const displayProject = (title) => {
    const displayProject = document.querySelector("#displayProject");
    const projectHead = document.createElement("div");
    const projectName = document.createElement("h2");
    const newTask = document.createElement("button");
    projectHead.id = "projectHead";
    projectName.id = "projectName";
    projectName.textContent = title;
    projectHead.appendChild(projectName);
    newTask.id = "newTaskBtn";
    projectHead.appendChild(newTask);
    displayProject?.appendChild(projectHead);
  };

  return { listProjects, displayProjectList, displayProject };
})();
