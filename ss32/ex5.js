function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?")) {
            taskList.removeChild(li);
        }
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}