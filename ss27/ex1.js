let addition = function(a,b) {
    return a+b
}

let subtraction = function(a,b) {
    return a-b
}

let multiplication = function(a,b) {
    return a*b
}

let division = function (a,b) {
    return a/b
}

let addNum = function(){
    do {
        a = +prompt("Nhập số thứ nhất")
        if (isNaN(a)) {
            alert("Vui lòi nhập một số")
        }
    } while (isNaN(a))

    do {
        b = +prompt("Nhập số thứ hai")
        if (isNaN(b)) {
            alert("Vui lòng nhập một số")
        }
    } while (isNaN(b))
    return "Nhập dữ liệu thành công"
} 

let choice
let a = 0
let b = 0
do {
    choice = +prompt("    1.Cộng hai số.\n    2.Trừ hai số.\n    3.Nhân hai số.\n    4.Chia hai số.\n    5.Thoát.")
    switch (choice) {
        case 1:
            alert(addNum())
            alert(addition(a,b))
            break
        
        case 2:
            alert(addNum())
            alert(subtraction(a,b)) 
            break

        case 3:
            alert(addNum())
            alert(multiplication(a,b))
            break

        case 4:
            alert(addNum())
            alert(division(a,b))
            break

        case 5:
            alert("Thoát chương trình")
            break
        
        default:
            break;
    }
} while (choice !== 5)