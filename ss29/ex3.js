let menu = {}

let addDish = function() {
    let category = prompt("Nhập danh mục món ăn:")
    if (!menu[category]) {
        menu[category] = []
    }
    let name = prompt("Nhập tên món ăn:")
    let price = parseFloat(prompt("Nhập giá món ăn:") || 0)
    let description = prompt("Nhập mô tả món ăn:")
    menu[category].push({ name, price, description })
    alert("Đã thêm món ăn thành công!")
};

let removeDish = function() {
    let category = prompt("Nhập danh mục món ăn:")
    if (!menu[category]) {
        alert("Danh mục không tồn tại!")
        return
    }
    let name = prompt("Nhập tên món ăn cần xóa:")
    let index = menu[category].findIndex(dish => dish.name === name)
    if (index !== -1) {
        menu[category].splice(index, 1)
        alert("Đã xóa món ăn thành công!")
    } else {
        alert("Không tìm thấy món ăn!")
    }
};

let updateDish = function() {
    let category = prompt("Nhập danh mục món ăn:")
    if (!menu[category]) {
        alert("Danh mục không tồn tại!")
        return
    }
    let name = prompt("Nhập tên món ăn cần cập nhật:")
    let dish = menu[category].find(dish => dish.name === name)
    if (dish) {
        dish.name = prompt("Nhập tên mới:") || dish.name
        dish.price = parseFloat(prompt("Nhập giá mới:") || dish.price)
        dish.description = prompt("Nhập mô tả mới:") || dish.description
        alert("Cập nhật món ăn thành công!")
    } else {
        alert("Không tìm thấy món ăn!")
    }
};

let showMenu = function() {
    let result = "Menu nhà hàng:\n"
    for (let category in menu) {
        result += `\nDanh mục: ${category}\n`
        menu[category].forEach(dish => {
            result += `Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}\n`
        })
    }
    alert(result || "Menu trống!")
};

let searchDish = function() {
    let name = prompt("Nhập tên món ăn cần tìm:")
    let foundDishes = []
    for (let category in menu) {
        let dish = menu[category].find(d => d.name === name)
        if (dish) {
            foundDishes.push({ category, ...dish })
        }
    }
    let result = "Kết quả tìm kiếm:\n"
    foundDishes.forEach(dish => {
        result += `Danh mục: ${dish.category}, Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}\n`
    })
    alert(result || "Không tìm thấy món ăn!")
}


let choice
do {
    choice = parseInt(prompt(`Chọn chức năng:\n1. Thêm món ăn vào danh mục\n2. Xóa món ăn theo tên\n3. Cập nhật thông tin món ăn\n4. Hiển thị menu\n5. Tìm kiếm món ăn theo tên\n6. Thoát`))
    switch (choice) {
        case 1:
            addDish()
            break
        case 2:
            removeDish()
            break
        case 3:
            updateDish()
            break
        case 4:
            showMenu()
            break
        case 5:
            searchDish()
            break
        case 6:
            alert("Thoát chương trình!")
            break;
        default:
            alert("Lựa chọn không hợp lệ!")
    }
} while (choice !== 6)