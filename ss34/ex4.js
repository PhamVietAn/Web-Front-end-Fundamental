document.addEventListener("DOMContentLoaded", loadTodos);

let input = document.getElementById("todoInput");
let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todoList");

function addToDoList() {
    let todoText = input.value.trim();

    if (todoText === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    addTodoItem(todoText);
    saveTodo(todoText);
    input.value = "";
}

function addTodoItem(todoText) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex w-100 justify-content-between align-items-center mt-3 mb-3 p-2 border-bottom";
    li.innerHTML = `
        ${todoText}
        <button class="btn btn-danger btn-sm ms-2" onclick="removeTodo(this, '${todoText}')">Xóa</button>
    `;
    todoList.appendChild(li);
}

function removeTodo(button, todoText) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?")) {
        button.parentElement.remove();
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        let updatedTodos = todos.filter(todo => todo !== todoText);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => addTodoItem(todo));
}

function saveTodo(todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}
