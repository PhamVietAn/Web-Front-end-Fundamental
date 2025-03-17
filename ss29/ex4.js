let tasks = [];

let addTask = function() {
    let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    let name = prompt("Nhập tên công việc:")
    let description = prompt("Nhập mô tả công việc:")
    let startTime = prompt("Nhập thời gian bắt đầu:")
    let status = prompt("Nhập trạng thái (hoàn thành/chưa hoàn thành):")
    tasks.push({ id, name, description, startTime, status })
    alert("Đã thêm công việc thành công!")
};

let showTasks = function() {
    let result = "Danh sách công việc:\n"
    tasks.forEach(task => {
        result += `ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Thời gian bắt đầu: ${task.startTime}, Trạng thái: ${task.status}\n`
    })
    alert(result || "Danh sách công việc trống!")
}

let updateTask = function() {
    let id = parseInt(prompt("Nhập ID công việc cần cập nhật trạng thái:"))
    let task = tasks.find(task => task.id === id)
    if (task) {
        task.status = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành):") || task.status
        alert("Cập nhật trạng thái công việc thành công!")
    } else {
        alert("Không tìm thấy công việc!")
    }
}

let filterTasks = function() {
    let status = prompt("Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành):")
    let filteredTasks = tasks.filter(task => task.status === status)
    let result = "Danh sách công việc đã lọc:\n"
    filteredTasks.forEach(task => {
        result += `ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Thời gian bắt đầu: ${task.startTime}, Trạng thái: ${task.status}\n`
    })
    alert(result || "Không có công việc nào phù hợp!")
}

let sortTasks = function() {
    tasks.sort((a, b) => a.status.localeCompare(b.status))
    alert("Đã sắp xếp công việc theo trạng thái!")
    showTasks()
}

let choice;
do {
    choice = +prompt(`Chọn chức năng:\n1. Thêm công việc mới\n2. Hiển thị tất cả công việc\n3. Cập nhật trạng thái công việc\n4. Lọc công việc theo trạng thái\n5. Sắp xếp công việc theo trạng thái\n6. Thoát`);
    switch (choice) {
        case 1:
            addTask()
            break
        case 2:
            showTasks()
            break
        case 3:
            updateTask()
            break
        case 4:
            filterTasks()
            break
        case 5:
            sortTasks()
            break
        case 6:
            alert("Thoát chương trình!")
            break
        default:
            alert("Lựa chọn không hợp lệ!")
    }
} while (choice !== 6)
