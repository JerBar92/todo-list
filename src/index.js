import { toDo } from "./todo.js";
import { project } from "./project.js";
import "./styles.css";

const newProjectBtn = document.querySelector("#newProjectBtn");
const newProject = document.querySelector("#newProject");
const cancelProject = document.querySelector("#cancelProject");

newProjectBtn?.addEventListener("click", () => newProject.show());
cancelProject?.addEventListener("click", () => project.clearNewProject());

const projectTitle = document.querySelector("#projectTitle");
const addProject = document.querySelector("#addProject");

//project.displayProjectList("My Project", []);

addProject?.addEventListener("click", (event) => {
  event.preventDefault();
  project.displayProjectList(projectTitle?.value, []);
  newProject?.close();
  project.clearNewProject();
});

//project.displayProject(project.listProjects()[0].title);
