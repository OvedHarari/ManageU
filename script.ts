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
    // localStorage.removeItem(JSON.parse(localStorage.getItem("Tasks").id));
    // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    // console.log(
    //   JSON.stringify(localStorage.removeItem("Tasks"))[indexToDelete]
    // );
  }
  updateTaskDescription(id: number, newDescription: string): void {
    let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
    this.tasks[indexToUpdate].description = newDescription;
    // localStorage.setItem(
    //   "Tasks",
    //   JSON.stringify(this.tasks[indexToUpdate].description)
    // );
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

//
// function setManagerOnLoad(): any {
//   if (manager.tasks.length == null) {
//     for (let task of (manager.tasks = JSON.parse(
//       localStorage.getItem("Task")!
//     ))) {
//       new Task(task.description, task.completed, task.id);
//       // manager.addTask(task.description, task.completed, task.id);
//     }
//     // manager.tasks = JSON.parse(localStorage.getItem("Task")!);
//   }
// }
// setManagerOnLoad();

console.log(manager);

// manager.addTask("HomeWork", false);
// manager.addTask("More HomeWork!", false);
// manager.addTask("More HomeWork and some more!", true);
// manager.addTask("Mor and More HomeWork and some more!", true);
// manager.updateTaskDescription();

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
// function showTasksInLists() {
//   document.getElementById("active")!.innerHTML = "";
//   document.getElementById("complete")!.innerHTML = "";
//   if (JSON.parse(localStorage.getItem("Tasks")!) == null) {
//     document.getElementById("active")!.innerHTML += `
//      <div> <li class="list-group-item d-inline-block w-50">No Tasks To Show!</li>  </div> `;
//   } else {
//     for (let task of JSON.parse(localStorage.getItem("Tasks")!)) {
//       if (task.completed == false) {
//         document.getElementById("active")!.innerHTML += `
//      <div> <li class="list-group-item d-inline-block w-50">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
//       } else {
//         document.getElementById("complete")!.innerHTML += `
//       <div> <li class="list-group-item d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span> <button class="btn btn-success" disabled><i class="fa-solid fa-check-double"></i></button> <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id}"><i class="fa-solid fa-trash"></i></button></span> </div> `;
//       }
//     }
//   }
// }

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

    // let newTask = new Task(description, completed);

    manager.addTask(description, completed);
    // console.log(manager.addTask(description, completed));
    // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));

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
  // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
  showTasksInLists();
};

function deleteTask(id: number) {
  // confirm "Are you sure?"
  if (confirm("Are you sure?")) {
    manager.deleteTask(id);
    // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    showTasksInLists();
  }
}

function updateDescription(id: number) {
  // prompt for new description
  let newDescription = prompt("Enter new description:");
  if (newDescription != null || newDescription != "") {
    manager.updateTaskDescription(id, newDescription!);
    // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    showTasksInLists();
  } else alert("Sorry! Something went wrong");
}

console.log(manager.tasks);
// localStorage.setItem("Tasks", JSON.stringify(manager.tasks));

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
