import { toDo } from "./todo.js";
import { project } from "./project.js";
import "./styles.css";

const newProjectBtn = document.querySelector("#newProjectBtn");
const newProject = document.querySelector("#newProject");

newProjectBtn?.addEventListener("click", () => newProject.show());

const newTaskBtn = document.querySelector("#newTaskBtn");
const newTask = document.querySelector("#newTask");
const cancelTask = document.querySelector("#cancelTask");

newTaskBtn?.addEventListener("click", () => (newTask.style.display = "block"));
cancelTask?.addEventListener("click", () => (newTask.style.display = "none"));

const projectTitle = document.querySelector("#projectTitle");
const addProject = document.querySelector("#addProject");

project.displayProjectList("My Project", []);

addProject?.addEventListener("click", (event) => {
  event.preventDefault();
  project.displayProjectList(projectTitle?.value, []);
  newProject?.close();
});

const projectDiv = document.querySelector(`#projectDiv${index}`);
