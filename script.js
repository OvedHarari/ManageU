// Task class creation
var Task = /** @class */ (function () {
    function Task(description, completed, id) {
        if (completed === void 0) { completed = false; }
        if (id === void 0) { id = Math.floor(Math.random() * 1001); }
        this.description = description;
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
    return Task;
}());
// let task1 = new Task("HW");
// console.log(task1);
// TaskManager creation
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = localStorage.getItem("Tasks")
            ? JSON.parse(localStorage.getItem("Tasks"))
            : [];
    }
    TaskManager.prototype.addTask = function (description, completed) {
        this.tasks.push(new Task(description, completed));
        localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(indexToDelete, 1);
        localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
        // localStorage.removeItem(JSON.parse(localStorage.getItem("Tasks").id));
        // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
        // console.log(
        //   JSON.stringify(localStorage.removeItem("Tasks"))[indexToDelete]
        // );
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].description = newDescription;
        // localStorage.setItem(
        //   "Tasks",
        //   JSON.stringify(this.tasks[indexToUpdate].description)
        // );
        localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
        localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    };
    TaskManager.prototype.activateTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = false;
        localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    };
    return TaskManager;
}());
var manager = new TaskManager();
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
    document.getElementById("active").innerHTML = "";
    document.getElementById("complete").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("active").innerHTML += "\n     <div> <li class=\"list-group-item d-inline-block w-50\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i></button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
        }
        else {
            document.getElementById("complete").innerHTML += "\n      <div> <li class=\"list-group-item d-inline-block w-50 text-decoration-line-through\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"reassignTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check-double\"></i></button> <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
        }
    }
}
showTasksInLists();
function completeTask(id) {
    manager.completeTask(id);
    showTasksInLists();
}
showTasksInLists();
var addNewTask = function () {
    var description = document.getElementById("newTask")
        .value;
    if (description != "" || description != null) {
        var completed = document.getElementById("completed").checked == true
            ? true
            : false;
        console.log(document.getElementById("completed").value);
        document.getElementById("newTask").value = "";
        document.getElementById("completed").checked = false;
        // let newTask = new Task(description, completed);
        manager.addTask(description, completed);
        // console.log(manager.addTask(description, completed));
        // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
        showTasksInLists();
    }
    else {
        alert("Please add Task description");
    }
};
var reassignTask = function (id) {
    manager.activateTask(id);
    showTasksInLists();
};
var completeActiveTask = function (id) {
    manager.completeTask(id);
    // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
    showTasksInLists();
};
function deleteTask(id) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
        showTasksInLists();
    }
}
function updateDescription(id) {
    // prompt for new description
    var newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription);
        // localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
        showTasksInLists();
    }
    else
        alert("Sorry! Something went wrong");
}
console.log(manager.tasks);
// localStorage.setItem("Tasks", JSON.stringify(manager.tasks));
//Copyrights
function copyrights() {
    var developer = "Oved Harari";
    var date = new Date();
    var currentYear = date.getFullYear();
    console.log(currentYear);
    document.getElementById("copyrightYear").innerText = " " + currentYear;
    document.getElementById("developer").innerText = developer;
}
copyrights();
