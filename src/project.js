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
    const projectAdd = document.createElement("button");
    const projectRemove = document.createElement("button");
    projectArray.forEach((project, index) => {
      projectAdd.textContent = project.title;
      projectAdd.className = "projectAddBtn";
      projectAdd.id = `projectAdd-${index}`;
      projectRemove.textContent = "Remove";
      projectRemove.className = "projectRemoveBtn";
      projectRemove.id = `projectRemove-${index}`;
      projectDiv.className = "projectDiv";
      projectDiv.appendChild(projectAdd);
      projectDiv.appendChild(projectRemove);
      projectList?.appendChild(projectDiv);

      /*projectRemove.addEventListener("click", () => {
        projectArray.splice(index, 1);
      });*/
    });
  };

  const displayProjectList = (title, toDo) => {
    const newProject = projects(title, toDo);
    projectArray.push(newProject);
    createProject();
  };

  const displayProject = (title) => {
    const displayProject = document.querySelector("#displayProject");
    const taskForm = document.querySelector("#taskForm");
    const projectHead = document.createElement("div");
    const projectName = document.createElement("h2");
    const newTask = document.createElement("button");
    projectHead.id = "projectHead";
    projectName.id = "projectName";
    projectName.textContent = title;
    projectHead.appendChild(projectName);
    newTask.textContent = "New task";
    newTask.className = "newTaskBtn";
    newTask.addEventListener("click", () => taskForm.show());
    projectHead.appendChild(newTask);
    displayProject?.appendChild(projectHead);
  };

  const clearNewProject = () => {
    const projectTitle = document.querySelector("#projectTitle");
    const newProject = document.querySelector("#newProject");
    projectTitle.value = "";
    newProject.close();
  };

  return { listProjects, displayProjectList, displayProject, clearNewProject };
})();
