import { toDo } from "./todo";

export const project = (function () {
  const projectArray = getStorage();
  const projectList = document.querySelector("#projectList");
  const head = document.querySelector("#head");

  function projects(title, todo) {
    return {
      title: title,
      todo: todo,
    };
  }

  const listProjects = () => projectArray;

  //Create a new project on the nav
  const createProject = (title, todo) => {
    const newproject = projects(title, todo);
    projectArray.push(newproject);
    storeProject();
    console.log(getStorage());
    displayProjectList(projectArray);
  };
  //Display the project list in the nav
  const displayProjectList = (array) => {
    projectList?.replaceChildren();
    array.forEach((project, index) => {
      const projectDiv = document.createElement("div");
      const projectAdd = document.createElement("button");
      const projectRemove = document.createElement("button");
      projectDiv.className = "projectDiv";
      projectDiv.id = `projectDiv${index}`;
      projectAdd.textContent = project.title;
      projectAdd.className = "projectAddBtn";
      projectAdd.id = `projectAdd-${index}`;
      projectAdd.addEventListener("click", () => {
        clearProjectDisplay();
        toDo.clearTaskDisplay();
        displayProject(project.title, index);
        toDo.displayTaskCard(index);
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

  //remove a project in the nav
  const removeProject = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    projectArray.splice(index, 1);
    storeProject();
    const projectDiv = document.querySelectorAll(".projectDiv");
    projectDiv.forEach((div) => projectList?.removeChild(div));
    clearProjectDisplay();
    displayProjectList(projectArray);
  };

  //Display the project with is name and a button to add task with a form
  const displayProject = (title, index) => {
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
    newTask.id = `newTaskBtn${index}`;
    newTask.addEventListener("click", () => {
      const addTask = document.querySelector(".addTask");
      addTask.id = `addtask-${index}`;
      taskForm.show();
    });
    projectHead.appendChild(newTask);
    head?.appendChild(projectHead);
  };

  //Clear and close the form use to create a new project
  const clearNewProject = () => {
    const projectTitle = document.querySelector("#projectTitle");
    const newProject = document.querySelector("#newProject");
    projectTitle.value = "";
    newProject.close();
  };

  //Clear and change the name of the project when a new project is selected
  const clearProjectDisplay = () => {
    const projectHead = document.querySelector("#projectHead");
    if (!projectHead) {
      return;
    } else {
      head?.removeChild(projectHead);
      toDo.clearTaskDisplay();
    }
  };

  function storeProject() {
    localStorage.setItem("projects", JSON.stringify(listProjects()));
  }

  function getStorage() {
    let storage = JSON.parse(localStorage.getItem("projects"));
    if (!storage) {
      return [];
    } else {
      return storage;
    }
  }
  return {
    listProjects,
    createProject,
    displayProjectList,
    displayProject,
    clearNewProject,
    storeProject,
    getStorage,
  };
})();
