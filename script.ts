// Task class creation
class Task {
  public id: number;
  public completed: boolean;

  constructor(
    public description: string,
    completed: boolean = false,
    id: number = Math.floor(Math.random() * 1001)
  ) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}

// let task1 = new Task("HW");
// console.log(task1);

// TaskManager creation

class TaskManager {
  public tasks: Task[];
  constructor() {
    this.tasks = localStorage.getItem("Tasks")
      ? JSON.parse(localStorage.getItem("Tasks")!)
      : [];
  }
  addTask(description: string, completed: boolean): void {
    this.tasks.push(new Task(description, completed));
    localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  }
  deleteTask(id: number): void {
    let indexToDelete = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks.splice(indexToDelete, 1);
    localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  }
  updateTaskDescription(id: number, newDescription: string): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].description = newDescription;

    localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  }
  completeTask(id: number): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].completed = true;
    localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  }
  activateTask(id: number): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].completed = false;
    localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  }
}

let manager = new TaskManager();

console.log(manager);

// showTasksInLists();

// Original (B4 LocalStorage)
function showTasksInLists() {
  document.getElementById("active")!.innerHTML = "";
  document.getElementById("complete")!.innerHTML = "";
  for (let task of manager.tasks) {
    if (task.completed == false) {
      document.getElementById("active")!.innerHTML += `
     <div> <li class="list-group-item d-inline-block w-50">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
    } else {
      document.getElementById("complete")!.innerHTML += `
      <div> <li class="list-group-item d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span> <button class="btn btn-success" onclick="reassignTask(${task.id})"><i class="fa-solid fa-check-double"></i></button> <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
    }
  }
}

showTasksInLists();

function completeTask(id: number) {
  manager.completeTask(id);
  showTasksInLists();
}

showTasksInLists();

let addNewTask = () => {
  let description = (document.getElementById("newTask") as HTMLInputElement)
    .value;
  if (description != "" || description != null) {
    let completed =
      (document.getElementById("completed") as HTMLInputElement).checked == true
        ? true
        : false;
    console.log(
      (document.getElementById("completed") as HTMLInputElement).value
    );

    (document.getElementById("newTask") as HTMLInputElement).value = "";
    (document.getElementById("completed") as HTMLInputElement).checked = false;

    manager.addTask(description, completed);

    showTasksInLists();
  } else {
    alert("Please add Task description");
  }
};

let reassignTask = (id: number) => {
  manager.activateTask(id);
  showTasksInLists();
};

let completeActiveTask = (id: number) => {
  manager.completeTask(id);
  showTasksInLists();
};

function deleteTask(id: number) {
  // confirm "Are you sure?"
  if (confirm("Are you sure?")) {
    manager.deleteTask(id);
    showTasksInLists();
  }
}

function updateDescription(id: number) {
  // prompt for new description
  let newDescription = prompt("Enter new description:");
  if (newDescription != null || newDescription != "") {
    manager.updateTaskDescription(id, newDescription!);
    showTasksInLists();
  } else alert("Sorry! Something went wrong");
}

console.log(manager.tasks);

//Copyrights
function copyrights() {
  const developer = "Oved Harari";
  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  document.getElementById("copyrightYear")!.innerText = " " + currentYear;
  document.getElementById("developer")!.innerText = developer;
}
copyrights();
