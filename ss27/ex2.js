let addSV = function() {
    do {
        n = +prompt("Nhập số lượng sinh viên")
        if (isNaN(n) || n < 0) {
            alert("Vui lòng nhập một số nguyên dương")
        }
    } while (isNaN(n) || n < 0)

    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập sinh viên thứ ${i+1}`).trim()
        if (input) { 
            arr.push(input)
        }
    }
    
    return "Nhập dữ liệu thành công"
}

let printL = function() {
    if (arr.length === 0) {
        return "Danh sách sinh viên trống!"
    } else {
        return "Danh sách sinh viên:\n" + arr.map((sv, index) => `${index + 1}. ${sv}`).join("\n")
    }
}

let searchSV = function() {
    if (arr.length === 0) {
        return "Danh sách sinh viên trống!"
    } else {
        let searchName = prompt("Nhập tên sinh viên cần tìm:").trim().toLowerCase()
        let found = arr.filter(sv => sv.toLowerCase().includes(searchName))
        if (found.length > 0) {
            return "Đã tìm thấy:\n" + found.map((sv, index) => `${index + 1}. ${sv}`).join("\n")
        } else {
            return "Không tìm thấy sinh viên nào!"
        }
    }
}

let deleteSV = function() {
    if (arr.length === 0) {
        alert("Danh sách sinh viên trống!");
    } else {
        let deleteName = prompt("Nhập tên sinh viên cần xóa:").trim().toLowerCase();
        let initialLength = arr.length;
        arr = arr.filter(sv => !sv.toLowerCase().includes(deleteName));
        if (arr.length < initialLength) {
            alert("Đã xóa sinh viên thành công!");
        } else {
            alert("Không tìm thấy sinh viên để xóa!");
        }
    }
    return printL()
}

let arr = []
let choice;
do {
    choice = +prompt("    1. Nhập danh sách sinh viên.\n    2. Hiển thị danh sách sinh viên.\n    3. Tìm sinh viên theo tên.\n    4. Xóa sinh viên khỏi danh sách.\n    5. Thoát.");
    switch (choice) {
        case 1:
            alert(addSV());
            break;
        
        case 2:
            alert(printL())
            break;

        case 3:
            alert(searchSV())
            break;

        case 4:
            alert(deleteSV())
            break;

        case 5:
            alert("Thoát chương trình");
            break;
        
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-5.");
            break;
    }
} while (choice !== 5);