let password = 'hello'
let userPass
do {
    userPass = prompt("Nhập mật khẩu:")
    if (userPass !== password) {
        alert("Mật khẩu sai vui lòng nhập lại")
    }
} while (userPass!==password)
    alert("Mật khẩu chính xác")

