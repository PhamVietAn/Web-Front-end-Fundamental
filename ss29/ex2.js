let products = []

let addProduct = function() {
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1
    let name = prompt("Nhập tên sản phẩm:")
    let price = parseFloat(prompt("Nhập giá sản phẩm:") || 0)
    let category = prompt("Nhập danh mục sản phẩm:")
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm:") || 0)
    products.push({ id, name, price, category, quantity })
    alert("Đã thêm sản phẩm thành công!")
}

let showProducts = function() {
    let productList = "Danh sách sản phẩm:\n"
    products.forEach(product => {
        productList += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}\n`
    })
    alert(productList)
}

let showProductDetails = function() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xem chi tiết:"))
    let product = products.find(p => p.id === id)
    if (product) {
        alert(`Chi tiết sản phẩm:\nID: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\nQuantity: ${product.quantity}`)
    } else {
        alert("Không tìm thấy sản phẩm!")
    }
}

let updateProduct = function() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"))
    let product = products.find(p => p.id === id)
    if (product) {
        product.name = prompt("Nhập tên mới:") || product.name
        product.price = parseFloat(prompt("Nhập giá mới:") || product.price)
        product.category = prompt("Nhập danh mục mới:") || product.category
        product.quantity = parseInt(prompt("Nhập số lượng mới:") || product.quantity)
        alert("Cập nhật sản phẩm thành công!")
    } else {
        alert("Không tìm thấy sản phẩm!")
    }
}

let deleteProduct = function() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"))
    let index = products.findIndex(p => p.id === id)
    if (index !== -1) {
        products.splice(index, 1)
        alert("Đã xóa sản phẩm thành công!")
    } else {
        alert("Không tìm thấy sản phẩm!")
    }
}

let searchByPrice = function() {
    let minPrice = parseFloat(prompt("Nhập giá tối thiểu:") || 0)
    let maxPrice = parseFloat(prompt("Nhập giá tối đa:") || Infinity)
    let filtered = products.filter(p => p.price >= minPrice && p.price <= maxPrice)
    let result = "Sản phẩm trong khoảng giá:\n"
    filtered.forEach(product => {
        result += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}\n`
    })
    alert(result || "Không có sản phẩm nào trong khoảng giá này!")
}


let choice
do {
    choice = parseInt(prompt(`Chọn chức năng:\n1. Thêm sản phẩm\n2. Hiển thị tất cả sản phẩm\n3. Hiển thị chi tiết sản phẩm theo ID\n4. Cập nhật sản phẩm\n5. Xóa sản phẩm\n6. Lọc sản phẩm theo khoảng giá\n7. Thoát`))
    switch (choice) {
        case 1:
            addProduct()
            break
        case 2:
            showProducts()
            break
        case 3:
            showProductDetails()
            break
        case 4:
            updateProduct()
            break
        case 5:
            deleteProduct()
            break
        case 6:
            searchByPrice()
            break
        case 7:
            alert("Thoát chương trình!")
            break
        default:
            alert("Lựa chọn không hợp lệ!")
    }
} while (choice !== 7)

