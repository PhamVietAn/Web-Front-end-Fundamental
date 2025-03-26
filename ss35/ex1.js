document.addEventListener("DOMContentLoaded", loadTodos)

let input = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")

function addTask() {
    let todoText = input.value.trim()
    if (todoText === "") {
        return
    }
        
    addTodo(todoText)
    saveTodo(todoText)
    input.value = ""
}

function addTodo(todoText) {
    let li = document.createElement("li")
    li.innerHTML = `<span>${todoText}</span>
                    <div>
                        <button onclick="editTodo(this, '${todoText}')">Sửa</button> 
                        <button onclick="deleteTodo(this, '${todoText}')">Xóa</button>
                    </div>`
    taskList.appendChild(li)
}

function saveTodo(todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.push(todoText)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(button, todoText) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
        let li = button.parentElement.parentElement
        li.remove()
        let todos = JSON.parse(localStorage.getItem("todos")) || []
        let updatedTodos = todos.filter(todo => todo !== todoText)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
}

function editTodo(button, oldText) {
    let newText = prompt("Chỉnh sửa công việc:", oldText)
    if (newText !== "") {
        let li = button.parentElement.parentElement
        li.querySelector("span").innerText = newText
        let todos = JSON.parse(localStorage.getItem("todos")) || []
        let updatedTodos = todos.map(todo => todo === oldText ? newText : todo)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach(todo => addTodo(todo))
}
