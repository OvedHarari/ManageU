// Task class creation
class Task {
  public id: number;
  public completed: boolean;

  constructor(public description: string, completed: boolean = false) {
    this.id = Math.floor(Math.random() * 1001);
    this.description = description;
    this.completed = completed;
  }
}

let task1 = new Task("HW");
console.log(task1);

// TaskManager creation

class TaskManager {
  public tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  addTask(description: string, completed: boolean): void {
    this.tasks.push(new Task(description, completed));
  }
  deleteTask(id: number): void {
    let indexToDelete = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks.splice(indexToDelete, 1);
  }
  updateTaskDescription(id: number, newDescription: string): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].description = newDescription;
  }
  completeTask(id: number): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].completed = true;
  }
}

let manager = new TaskManager();
manager.addTask("HomeWork", false);
manager.addTask("More HomeWork!", false);
manager.addTask("More HomeWork and some more!", true);
manager.addTask("Mor and More HomeWork and some more!", true);
// manager.updateTaskDescription();

// console.log(manager.tasks);

// // Test Only --- Show in Table
// function showTasksInTable(): void {
//   for (let task of manager.tasks) {
//     document.getElementById(
//       "tasks"
//     )!.innerHTML += `<tr> <td> ${task.id} </td> <td> ${task.description} </td> <td> ${task.completed} </td> </tr>`;
//   }
// }

// showTasksInTable();

// show Tasks in list
//
function showTasksInLists() {
  document.getElementById("active")!.innerHTML = "";
  document.getElementById("complete")!.innerHTML = "";
  for (let task of manager.tasks) {
    if (task.completed == false) {
      document.getElementById("active")!.innerHTML += `
     <div> <li class="list-group-item d-inline-block w-50">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
    } else {
      document.getElementById("complete")!.innerHTML += `
      <div> <li class="list-group-item d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span> <button class="btn btn-success" disabled><i class="fa-solid fa-check-double"></i></button> <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" disabled><i class="fa-solid fa-trash"></i></button></span> </div> `;
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
  let completed =
    (document.getElementById("completed") as HTMLInputElement).checked == true
      ? true
      : false;
  console.log((document.getElementById("completed") as HTMLInputElement).value);

  (document.getElementById("newTask") as HTMLInputElement).value = "";
  (document.getElementById("completed") as HTMLInputElement).checked = false;

  // let newTask = new Task(description, completed);

  manager.addTask(description, completed);
  // console.log(manager.addTask(description, completed));

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
