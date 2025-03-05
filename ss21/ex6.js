let num
let str = ""
do {
    num = +prompt("Nhập vào một số nguyên bất kỳ")
    if (isNaN(num) || num<1) {
        alert("Nhập sai, vui lòng nhập lại")
    }
} while (isNaN(num) || num<1)

for (let i = 1; i <= num; i++) {
    let output = i
    if (num % output === 0){
        str = str + output + " "
    }
}

alert(`Ước của ${num} là: ${str}`)