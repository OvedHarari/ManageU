// Task class creation
var Task = /** @class */ (function () {
    function Task(description, completed) {
        if (completed === void 0) { completed = false; }
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = completed;
    }
    return Task;
}());
var task1 = new Task("HW");
console.log(task1);
// TaskManager creation
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description, completed) {
        this.tasks.push(new Task(description, completed));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(indexToDelete, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
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
    document.getElementById("active").innerHTML = "";
    document.getElementById("complete").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("active").innerHTML += "\n     <div> <li class=\"list-group-item d-inline-block w-50\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i></button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
        }
        else {
            document.getElementById("complete").innerHTML += "\n      <div> <li class=\"list-group-item d-inline-block w-50 text-decoration-line-through\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" disabled><i class=\"fa-solid fa-check-double\"></i></button> <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" disabled><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
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
    var completed = document.getElementById("completed").checked == true
        ? true
        : false;
    console.log(document.getElementById("completed").value);
    document.getElementById("newTask").value = "";
    document.getElementById("completed").checked = false;
    // let newTask = new Task(description, completed);
    manager.addTask(description, completed);
    // console.log(manager.addTask(description, completed));
    showTasksInLists();
};
var completeActiveTask = function (id) {
    manager.completeTask(id);
    showTasksInLists();
};
function deleteTask(id) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
    }
}
function updateDescription(id) {
    // prompt for new description
    var newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription);
        showTasksInLists();
    }
    else
        alert("Sorry! Something went wrong");
}
