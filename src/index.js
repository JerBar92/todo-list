import { toDo } from "./todo.js";
import { project } from "./project.js";
import "./styles.css";

const newProjectBtn = document.querySelector("#newProjectBtn");
const newProject = document.querySelector("#newProject");

newProjectBtn?.addEventListener("click", () => newProject.show());

const newTaskBtn = document.querySelector("#newTaskBtn");
const newTask = document.querySelector("#newTask");
const cancelTask = document.querySelector("#cancelTask");

newTaskBtn?.addEventListener("click", () => newTask.show());
cancelTask?.addEventListener("click", () => newTask.close());
