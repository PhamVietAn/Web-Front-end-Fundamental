let radius = function() {
    do {
        r = +prompt("Nhập vào bán kính")
        if (isNaN(r) || r < 0) {
            alert("Vui lòng nhập một số nguyên dương")
        }
    } while (isNaN(r) || r < 0)
        return "nhập dữ liệu thành công"
}

let length_Heigh = function() {
    do {
        a = +prompt("Nhập vào chiều dài")
        if (isNaN(a) || a < 0) {
            alert("Vui lòng nhập một số nguyên dương")
        }
    } while (isNaN(a) || a < 0)
    
    do {
        b = +prompt("Nhập vào chiều rộng")
        if (isNaN(b) || b < 0) {
            alert("Vui lòng nhập một số nguyên dương")
        }
    } while (isNaN(b) || b < 0)
    return "nhập dữ liệu thành công"
}

let circularArea = function(r) {
    return `Diện tích hình tròn: ${(r**2 * Math.PI).toFixed(1)} `
}

let circleCircumference = function(r) {
    return `Chu vi hình tròn: ${(r*2 *Math.PI).toFixed(1)} `
}

let rectangularArea = function(a,b) {
    return `Diện tích chữ nhật: ${a*b}`
}

let rectangularCircumference = function(a,b) {
    return `Chu vi hình chữ nhật: ${(a+b) * 2}`
}
let r = 0,a = 0,b = 0
let arr = []
let choice;
do {
    choice = +prompt("    1. Tính diện tích hình tròn.\n    2. TÍnh chu vi hình tròn.\n    3. Tính diện tích hình chwũ nhật.\n    4. Tính chu vi hình chữ nhật.\n    5. Thoát.");
    switch (choice) {
        case 1:
            alert(radius())
            alert(circularArea(r))
            break;
        
        case 2:
            alert(radius())
            alert(circleCircumference(r))
            break;

        case 3:
            alert(length_Heigh())
            alert(rectangularArea(a,b))
            break;

        case 4:
            alert(length_Heigh())
            alert(rectangularCircumference(a,b))
            break;

        case 5:
            alert("Thoát chương trình");
            break;
        
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-5.");
            break;
    }
} while (choice !== 5);