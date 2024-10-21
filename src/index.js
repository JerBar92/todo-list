import { toDo } from "./todo.js";
import { project } from "./project.js";
import "./styles.css";

//project.createProject("My Project", []);
project.displayProjectList();

const newProjectBtn = document.querySelector("#newProjectBtn");
const newProject = document.querySelector("#newProject");
const cancelProject = document.querySelector("#cancelProject");
const addProject = document.querySelector("#addProject");
const cancelTask = document.querySelector("#cancelTask");
const addTask = document.querySelector(".addTask");

newProjectBtn?.addEventListener("click", () => newProject.show());

cancelProject?.addEventListener("click", () => project.clearNewProject());

addProject?.addEventListener("click", (event) => {
  event.preventDefault();
  const projectTitle = document.querySelector("#projectTitle");
  project.createProject(projectTitle?.value, []);
  newProject?.close();
  project.clearNewProject();
});

cancelTask?.addEventListener("click", () => toDo.clearNewTask());

addTask?.addEventListener("click", (event) => {
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const dueDate = document.querySelector("#date");
  const priority = document.querySelector(`input[name=priority]:checked`);
  let indexP = toDo.giveIndexProject(event);
  toDo.createTaskCard(
    indexP,
    taskTitle.value,
    taskDescription.value,
    dueDate.value,
    priority?.value
  );
  toDo.clearNewTask();
});
