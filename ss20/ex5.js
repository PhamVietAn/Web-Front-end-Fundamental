let numA = +prompt("Nhập số a")
let numB = +prompt("Nhập số B")
let total = 1
if (isNaN(numA) || isNaN(numB)){
    alert("Không hợp lệ")
} else {
    for (let i=0; i<numB; i++) {
        total=(total)*(numA)
    }
    alert(total)
}