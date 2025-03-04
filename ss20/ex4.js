let str = prompt("Nhập vào một chuỗi:");
lenStr = str.length;
let search = prompt("Nhập kí tự muốn tìm trong chuỗi");
lenSearch = search.length;
flag = 1;
if (lenSearch > 1) {
    alert("Ký tự không hợp lệ");
} else {
    for (let i=0; i<=lenStr; i++) {
        if (str[i] === search) {
            flag = 0;
            break;
        }
    }
    if (flag ===     0) {
        alert("Tồn tại kí tự cần tìm kiếm")
    } else {
        alert("Không tồn tại kí tự cần tìm")
    }
}