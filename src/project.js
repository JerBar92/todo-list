export const project = (function () {
  const projectArray = [];
  const projectDisplay = document.querySelector("#projectDisplay");
  const projectList = document.querySelector("#projectList");

  function projects(title, toDo) {
    return {
      title: title,
      toDo: toDo,
    };
  }

  const listProjects = () => projectArray;

  const createProject = () => {
    const projectDiv = document.createElement("div");
    const projectAdd = document.createElement("button");
    const projectRemove = document.createElement("button");
    projectArray.forEach((project, index) => {
      projectDiv.className = "projectDiv";
      projectDiv.id = `projectDiv${index}`;
      projectAdd.textContent = project.title;
      projectAdd.className = "projectAddBtn";
      projectAdd.id = `projectAdd-${index}`;
      projectAdd.addEventListener("click", () => {
        clearProjectDisplay();
        displayProject(project.title);
      });
      projectRemove.textContent = "Remove";
      projectRemove.className = "projectRemoveBtn";
      projectRemove.id = `projectRemove-${index}`;
      projectRemove.addEventListener("click", removeProject);

      projectDiv.appendChild(projectAdd);
      projectDiv.appendChild(projectRemove);
      projectList?.appendChild(projectDiv);
    });
  };

  const removeProject = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    const projectDiv = document.getElementById(`projectDiv${index}`);
    projectList.removeChild(projectDiv);
    projectArray.splice(index, 1);
    clearProjectDisplay();
  };

  const displayProjectList = (title, toDo) => {
    const newProject = projects(title, toDo);
    projectArray.push(newProject);
    createProject();
  };

  const displayProject = (title) => {
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
    projectDisplay?.appendChild(projectHead);
  };

  const clearNewProject = () => {
    const projectTitle = document.querySelector("#projectTitle");
    const newProject = document.querySelector("#newProject");
    projectTitle.value = "";
    newProject.close();
  };

  const clearProjectDisplay = () => {
    const projectHead = document.querySelector("#projectHead");
    if (!projectHead) {
      return;
    } else {
      projectDisplay?.removeChild(projectHead);
    }
  };
  return { listProjects, displayProjectList, displayProject, clearNewProject };
})();
